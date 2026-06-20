import type { ChatInterface, ChatParticipantResponse, LocalMessageStatus, MessagesInterface } from './interfaces';
import MessagePreview from './MessagePreview';
import React, { useEffect, useMemo, useRef } from 'react';
import MessageSendbar from './MessageSendbar';
import { getActiveChatId } from '../store/services/messageSlice';
import { useAppDispatch, useAppSelector } from '../store/api/hooks';
import dayjs from 'dayjs';
import { useCurrentUserQuery } from '../store/services/authApi';
import { chatApi, useFetchChatParticipantQuery } from '../store/services/chatApi';
import socketService from '../websocket/socketService';
import { type MenuProps } from 'antd';
import HoverToView from './HoverToView';
import { Avatar } from '../utils/getAvatar';


export default function Chatbox({ messages, chat }: { messages?: MessagesInterface[], chat?: ChatInterface }) {
    const dispatch = useAppDispatch()
    const activeChatId = useAppSelector(getActiveChatId)
    const { data: userData } = useCurrentUserQuery()
    const { data: chatParticipants } = useFetchChatParticipantQuery({ chat_id: chat?.chat_id! }, { skip: !chat?.chat_id })

    const msgContainerRef = useRef<HTMLDivElement | null>(null)
    let lastDate: string = ''

    useEffect(() => {
        if (!msgContainerRef.current) return;
        msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight
    }, [messages])

    const otherParticipants = chatParticipants?.filter(e => e.user_id != userData?.user_id)

    useEffect(() => {
        if(document.visibilityState != 'visible') return;

        const lastMessage = messages?.at(-1)

        const currentParticipant = chatParticipants?.find(e => e.user_id == userData?.user_id)

        if (chat?.chat_id && lastMessage && lastMessage.id && lastMessage.sender_id != userData?.user_id && currentParticipant && currentParticipant.last_read_message_id != lastMessage.id) {

            const payload = {
                type: 'message_read',
                chat_id: chat?.chat_id,
                message_id: lastMessage.id
            }

            socketService.send(payload)

            dispatch(
                chatApi.util.updateQueryData(
                    'fetchChatParticipant',
                    { chat_id: chat.chat_id },
                    (draft: any) => {
                        const index = draft.findIndex((e: any) => e.id == currentParticipant.id)
                        if(index != -1){
                            draft[index] = {
                                ...draft[index],
                                last_read_message_id: lastMessage.id,
                                last_read_at: dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
                            }
                        }
                    }
                )
            )
        }

    }, [messages, chat?.chat_id, chatParticipants, userData?.user_id])

    const participantStatuses = useMemo(() => {
        const result: Record<string, MenuProps['items']> = {}

        messages?.forEach((message) => {
            if (message.sender_id != userData?.user_id) return;

            if (chat?.chat_type != 'group') return;

            result[message.id] = otherParticipants?.map((e) => ({
                                    key: e.user_id,
                                    label: `${e.user_name} - ${get_message_status(message, e)}`,
                                }))
        })

        return result;

    }, [userData?.user_id, chatParticipants, messages])

    if (!activeChatId) return;

    return (
        <main className="flex-1 flex flex-col bg-white h-[calc(100dvh-80px)]">
            <header className="p-4 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Avatar name={chat?.name!} image={chat?.image} className="size-10!" />
                    <div>
                        <h3 className="font-bold text-sm capitalize">{chat?.name}</h3>
                        {/* <p className="text-[11px] text-blue-500 italic">Mas Happy Typing....</p> */}
                    </div>
                </div>
            </header>

            <div ref={msgContainerRef} className="flex-1 bg-slate-50/40 p-6 overflow-y-auto space-y-6 scrollbar-hide">
                {messages?.map((e) => {
                    const currentDate = dayjs(e.created_at).format('MMM DD YYYY')
                    const isNewDate = lastDate != currentDate
                    isNewDate && (lastDate = currentDate)

                    return (
                        <React.Fragment key={e.id}>
                            {isNewDate &&
                                <div className="text-center select-none">
                                    <span className="text-[10px] font-bold bg-white px-3 py-1 rounded-full shadow-sm text-slate-500">
                                        {currentDate}
                                    </span>
                                </div>
                            }

                            {chat?.chat_type == 'private' ?
                                <MessagePreview
                                    message={e}
                                    chat={chat}
                                    messageStatus={get_message_status(e, otherParticipants?.[0])}
                                />
                                :
                                <HoverToView items={participantStatuses[e.id]}>
                                    <MessagePreview
                                        message={e}
                                        chat={chat}
                                    />
                                </HoverToView>
                            }
                        </React.Fragment>
                    )
                })}
            </div>
            <MessageSendbar chat={chat} />
        </main>
    )
};

const get_message_status = (message: MessagesInterface, otherParticipant?: ChatParticipantResponse): LocalMessageStatus => {
    const read_at = otherParticipant?.last_read_at
    const delivered_at = otherParticipant?.last_delivered_at

    if (message.status == 'sending') {
        return 'sending'
    }
    else if (dayjs(message.created_at).isSameOrBefore(read_at)) {
        return 'read'
    }
    else if (dayjs(message.created_at).isSameOrBefore(delivered_at)) {
        return 'delivered'
    }
    return 'sent'
}