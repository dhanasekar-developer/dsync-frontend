import type { RefreshResponse, LoginResponse, SignUpInterface, UserInterface } from "../../components/interfaces";
import apiSlice from "../api/apiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation<LoginResponse, SignUpInterface>({
            query: (body) => ({
                url: 'auth/signup',
                method: 'POST',
                data: body
            }),
        }),
        login: builder.mutation<LoginResponse, FormData>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                data: body
            }),
            invalidatesTags: [{ type: 'User' }]
        }),
        logout: builder.mutation<LoginResponse, void>({
            query: () => ({
                url: 'auth/logout',
                method: 'POST'
            }),
            invalidatesTags: [{ type: 'User' }]
        }),
        currentUser: builder.query<UserInterface, void>({
            query: () => ({
                url: 'auth/current_user',
                method: 'GET'
            }),
            providesTags: [{ type: 'User' }]
        }),
        refresh: builder.mutation<RefreshResponse, void>({
            query: () => ({
                url: 'auth/refresh',
                method: 'POST'
            }),
        })
    })
})

export const { useSignupMutation, useLoginMutation, useLogoutMutation, useCurrentUserQuery, useRefreshMutation } = authApi