import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosRequestConfig, AxiosError } from "axios";
import api from "./api";
import type { RootState } from "./store";

type AxiosBaseQueryArgs = {
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
};

type AxiosBaseQueryError = { status: number; data: unknown };

const rawBaseQuery = (): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
        async ({ url, method = "GET", data, params, headers }, apiRTK) => {
            try {
                const token = (apiRTK.getState() as RootState).auth.access_token
                const request_header:Record<string, string> = { ...(headers as Record<string, string> | undefined) }

                if(token) request_header.Authorization = `Bearer ${token}`

                const result = await api({ url, method, data, params, headers: request_header });
                return { data: result.data };
            } catch (err) {
                const error = err as AxiosError;
                return {
                    error: {
                        status: error.response?.status ?? 500,
                        data: error.response?.data ?? error.message,
                    },
                };
            }
        };

export const axiosBaseQueryWithReauth = (opts?: { refreshUrl?: string }): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
    async (args, apiRTK, extraOptions) => {
        const baseQuery = rawBaseQuery();
        
        let result = await baseQuery(args, apiRTK, extraOptions);

        if (result.error?.status === 401) {
            const refreshUrl = opts?.refreshUrl ?? "/auth/refresh";

            const refreshResult = await baseQuery(
                { url: refreshUrl, method: "POST" },
                apiRTK,
                extraOptions
            );

            if (refreshResult.error) {
                result.error = refreshResult.error;
            } else {
                result = await baseQuery(args, apiRTK, extraOptions);
            }
        }

        return result;
    };