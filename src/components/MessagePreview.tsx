import type { ChatInterface, ParticipantMessageStatus, MessagesInterface, LocalMessageStatus } from './interfaces'
import { useCurrentUserQuery } from '../store/services/authApi'
import { FiClock } from 'react-icons/fi'
import { PiChecksBold } from 'react-icons/pi'

import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { RxCheck } from 'react-icons/rx'
import type { MenuProps } from 'antd';

dayjs.extend(isSameOrBefore)

export default function MessagePreview({ message, chat, messageStatus }: { message: MessagesInterface, chat?: ChatInterface, messageStatus?: LocalMessageStatus }) {
    const { data: userData } = useCurrentUserQuery()
    const isYou = message.sender_id == userData?.user_id


    return (
        <div className={`flex gap-3 ${isYou ? 'flex-row-reverse' : ''}`}>
            {/* {!isYou && <img src={otherUser.image} className="w-8 h-8 rounded-full self-end mb-4" />} */}
            <div className={`max-w-[70%] ${isYou ? 'items-end' : ''} flex flex-col`}>
                <div className="flex items-center gap-2 mb-1">
                    {!isYou && <span className="font-bold text-xs capitalize">{chat?.name}</span>}
                    <span className="text-[10px] text-slate-400">{dayjs(message.created_at).format('hh:mm A')}</span>
                </div>
                <div className={`p-3 rounded-2xl text-sm shadow-sm relative ${isYou ? 'bg-blue-100 text-blue-900 rounded-tr-none pr-5 pb-3.5' : 'bg-white border border-slate-100 rounded-tl-none'}`}>
                    {message.message_text}
                    {(isYou && chat?.chat_type == 'private') &&
                        <span className="absolute bottom-2 right-1">

                            {messageStatus === 'sending' && (
                                <FiClock title='sent' size={10} strokeWidth={2} />
                            )}

                            {messageStatus === 'sent' && (
                                <RxCheck title='sent' size={14} strokeWidth={0.2} />
                            )}

                            {messageStatus === 'delivered' && (
                                <>
                                    <PiChecksBold title='delivered' size={12} />
                                </>
                            )}

                            {messageStatus === 'read' && (
                                <>
                                    <PiChecksBold title='viewed' size={14} strokeWidth={3} className='text-blue-600' />
                                </>
                            )}

                        </span>
                    }
                    {/* {link && <p className="mt-2 underline text-blue-500 block break-all cursor-pointer">{link}</p>} */}
                </div>
                {/* {isYou && <img src={userData.image} className="w-8 h-8 rounded-full mt-2" />} */}
            </div>
        </div>
    )
}
