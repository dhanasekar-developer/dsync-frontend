import type { ChatInterface, CreateChat, ChatParticipantResponse } from "../../components/interfaces";
import { errorToastHandler } from "../../utils/toastHandler";
import apiSlice from "../api/apiSlice";
import { setActiveChatId } from "./messageSlice";

export const chatApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchChatList: builder.query<ChatInterface[], void>({
            query: () => ({
                url: 'chats/chat_list',
                method: 'GET'
            }),
            providesTags: [{ type: 'ChatList' }]
        }),
        fetchChatParticipant: builder.query<ChatParticipantResponse[], { chat_id: string }>({
            query: (params) => ({
                url: 'chats/chat_participants_list',
                method: 'GET',
                params
            })
        }),
        createChat: builder.mutation<ChatInterface, CreateChat>({
            query: (data) => ({
                url: 'chats/create_chat',
                method: 'POST',
                data
            }),

            async onQueryStarted(_, { dispatch, queryFulfilled }) {

                try{
                    const { data } = await queryFulfilled

                    dispatch(
                        chatApi.util.updateQueryData(
                            'fetchChatList',
                            undefined,
                            (draft: ChatInterface[]) => {

                                if(!draft) draft = [];

                                const index = draft.findIndex(e => e.chat_id == data.chat_id) 

                                if(index == -1){
                                    draft.push(data)
                                }
                            }
                        )
                    )

                    dispatch(setActiveChatId(data.chat_id))
                }
                catch(err){
                    errorToastHandler(err)
                }

            }
        })
    })
})

export const { useFetchChatListQuery, useCreateChatMutation, useFetchChatParticipantQuery } = chatApi