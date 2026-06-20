import { MessageCircleMore, Send } from 'lucide-react'
import type { ChatInterface } from './interfaces'
import { useState } from 'react'
import socketService from '../websocket/socketService'
import { useAppDispatch } from '../store/api/hooks';
import { messageApi } from '../store/services/messageApi';
import dayjs from 'dayjs';
import { useCurrentUserQuery } from '../store/services/authApi';

export default function MessageSendbar({ chat }: { chat?: ChatInterface }) {
    const { data: userData } = useCurrentUserQuery()
    const [message, setMessage] = useState<string>('');

    const dispatch = useAppDispatch()

    if (!chat) return;

    const handleMessageSend = () => {
        if (!message.trim()) return;

        const temp_id = crypto.randomUUID()

        const payload = {
            type: 'new_message',
            message_text: message,
            message_type: 'text',
            chat_id: chat.chat_id,
        }

        dispatch(
            messageApi.util.updateQueryData(
                'fetchChatMessage',
                { chat_id: chat.chat_id },
                (draft: any) => {
                    draft.push({
                        ...payload,
                        created_at: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                        sender_id: userData?.user_id,
                        id: temp_id,
                        status: 'sending'
                    })
                }
            )
        )

        socketService.send({
            temp_id,
            ...payload,
        });

        setMessage("");
    };


    return (
        <div className="p-4 bg-white">
            <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-2 border border-transparent focus-within:border-blue-200 transition-all">
                <MessageCircleMore size={18} className="text-slate-400" />
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key == 'Enter' && handleMessageSend()}
                    type="text" placeholder="Type a message"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 outline-none"
                />
                <div className="flex gap-3 text-slate-400">
                    <Send onClick={handleMessageSend} size={18} className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>
    )
}
