import type { ChatInterface } from './interfaces';
import { getActiveChatId, setActiveChatId } from '../store/services/messageSlice';
import { useAppDispatch, useAppSelector } from '../store/api/hooks';
import { Avatar } from '../utils/getAvatar';

export default function ChatPreview ({ data }: { data: ChatInterface }) {
    const dispatch = useAppDispatch()
    const activeUserId = useAppSelector(getActiveChatId)

    const handlePreviewChat = (user_id: string) => {
        dispatch(setActiveChatId(user_id))
    }

    const isActive = activeUserId === data.chat_id

    return(
        <div onClick={() => handlePreviewChat(data.chat_id)} className={`flex gap-3 p-3 rounded-2xl cursor-pointer mb-2 transition-colors ${isActive ? 'bg-blue-100/60' : 'hover:bg-slate-50/50'}`}>
            <div className='bg-gray-200 rounded-full size-11'>
                <Avatar name={data.name} image={data.image} className="size-11!" />
                {/* <img src={data.image} className="w-11 h-11 rounded-full object-cover" alt={data.name} /> */}
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-sm truncate capitalize">{data.name}</h4>
                    {/* <span className="text-[10px] text-slate-400">{data.time}</span> */}
                </div>
                <div className="flex justify-between items-center">
                    <p className={`text-xs truncate ${isActive ? 'text-blue-500 font-medium' : 'text-slate-400'}`}>
                        {data?.last_message_type == 'text' ? data.last_message_text : data.last_message_type}
                    </p>
                    {/* {data.unread !== 0 && 
                        <span className="bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                            {data.unread}
                        </span>
                    } */}
                </div>
                
            </div>
        </div>
    )
}
