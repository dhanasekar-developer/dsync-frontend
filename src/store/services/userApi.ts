import type { UserInterface, ProfileUpdateInterface, PasswordChange } from "../../components/interfaces";
import apiSlice from "../api/apiSlice";


export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchUsers: builder.query<UserInterface[], { search: string }>({
            query: (params) => ({
                url: 'users/search',
                method: 'get',
                params
            }),
            providesTags: [{ type: 'Users' }]
        }),
        profileImageUpdate: builder.mutation<{image: string}, FormData>({
            query: (data) => ({
                url: 'users/update_profile_image',
                method: 'PUT',
                data
            }),
        }),
        profileUpdate: builder.mutation<void, ProfileUpdateInterface>({
            query: (data) => ({
                url: 'users/update_profile',
                method: 'PUT',
                data
            }),
        }),
        passwordChange: builder.mutation<void, PasswordChange>({
            query: (data) => ({
                url: 'users/password_change',
                method: 'PUT',
                data
            }),
        }),
    })
})

export const { useProfileUpdateMutation, useFetchUsersQuery, useLazyFetchUsersQuery, useProfileImageUpdateMutation, usePasswordChangeMutation } = userApi