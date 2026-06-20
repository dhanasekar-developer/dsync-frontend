import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../api/store";

interface InitialStateInterface {
    access_token?: string | null,
    initialized: boolean,
}

const initialState: InitialStateInterface = {
    access_token: null,
    initialized: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.access_token = action.payload
        },
        setInitialized: (state) => {
            state.initialized = true
        }
    }
})


export default authSlice.reducer;

export const { setCredentials, setInitialized } = authSlice.actions;

export const getAccessToken = (state: RootState) => state.auth.access_token;
export const getInitialized = (state: RootState) => state.auth.initialized;