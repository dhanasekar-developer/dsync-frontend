import type { MessagesInterface } from "../../components/interfaces";
import apiSlice from "../api/apiSlice";


export const messageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchChatMessage: builder.query<MessagesInterface[], { chat_id: string }>({
            query: (params) => ({
                url: 'messages/chat_messages',
                method: 'GET',
                params
            }),
            keepUnusedDataFor: 600,
            providesTags: [{ type: 'UsersMessage' }]
        }),
    })
})

export const { useLazyFetchChatMessageQuery, useFetchChatMessageQuery } = messageApi