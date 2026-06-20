import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQueryWithReauth } from "./axiosBaseQuery";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQueryWithReauth({ refreshUrl: "/auth/refresh" }),
    tagTypes: ['AuthUser', 'User', 'Users', 'UsersMessage', 'ChatList'],
    endpoints: () => ({}),
});

export default apiSlice;