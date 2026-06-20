import { useEffect } from "react"
import socketService from "./socketService"
import { useAppDispatch } from "../store/api/hooks"
import { messageApi } from "../store/services/messageApi"
import { chatApi } from "../store/services/chatApi"
import { useCurrentUserQuery } from "../store/services/authApi"


export const SocketListener = () => {
    const { data: userData } = useCurrentUserQuery()
    const dispatch = useAppDispatch()

    useEffect(() => {

        const unsubscribe = socketService.subscribe((message) => {

            switch (message.type) {

                case 'new_message':
                    dispatch(
                        messageApi.util.updateQueryData(
                            'fetchChatMessage',
                            { chat_id: message.chat_id },
                            (draft: any) => {
                                if (!draft) draft = []
                                const { temp_id, ...payload } = message
                                const index = draft.findIndex((e: any) => e.id == temp_id)

                                if (index != -1) {
                                    draft[index] = { ...payload, status: 'sent' }
                                }
                                else {
                                    draft.push(message)
                                }
                            }
                        )
                    )

                    dispatch(
                        chatApi.util.updateQueryData(
                            'fetchChatList',
                            undefined,
                            (draft: any) => {
                                const index = draft.findIndex((e: any) => e.chat_id == message.chat_id)

                                draft[index] = {
                                    ...draft[index],
                                    last_message_text: message.message_text,
                                    last_message_type: message.message_type
                                }
                            }
                        )
                    )
                    if (message.sender_id != userData?.user_id) {
                        console.log(message.sender_id, userData?.user_id)
                        socketService.send({
                            type: 'message_delivered',
                            chat_id: message.chat_id,
                            message_id: message.id
                        })
                    }
                    break;

                case 'message_delivered':
                case 'message_read':

                    dispatch(
                        chatApi.util.updateQueryData(
                            'fetchChatParticipant',
                            { chat_id: message.chat_id },
                            (draft: any) => {
                                if (draft) {
                                    const index = draft.findIndex((e: any) => e.user_id == message.delivered_user_id)
                                    if (index != -1) {
                                        draft[index] = { 
                                            ...draft[index], 
                                            last_delivered_message_id: message.last_delivered_message_id,
                                            last_delivered_at: message.last_delivered_at,
                                            last_read_message_id: message.last_read_message_id,
                                            last_read_at: message.last_read_at,
                                        }
                                    }
                                }

                            }
                        )
                    )
                    break;
                
            }

        })

        return unsubscribe

    }, [dispatch])

    return null;
}
