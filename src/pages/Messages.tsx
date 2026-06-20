import Chatbox from "../components/Chatbox";
import ChatList from "../components/ChatList";
import { getActiveChatId } from '../store/services/messageSlice';
import { useFetchChatMessageQuery } from '../store/services/messageApi';
import { useFetchChatListQuery } from "../store/services/chatApi";
import { useAppSelector } from "../store/api/hooks";

export default function Messages() {
    const activeChatId = useAppSelector(getActiveChatId)
    const { data: messages } = useFetchChatMessageQuery({ chat_id: activeChatId! }, { skip: !activeChatId })

    const { data: chatList } = useFetchChatListQuery()
    const chat = chatList?.find(e => e.chat_id == activeChatId)

  return (
    <>
        <div className='flex'>
            <ChatList chatList={chatList} />
            <Chatbox chat={chat} messages={messages} />
        </div>
    </>
  )
}
