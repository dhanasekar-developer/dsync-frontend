import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../api/store";

interface InitialStateInterface {
    activeChatId: string,
}

const initialState: InitialStateInterface = {
    activeChatId: ''
}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setActiveChatId (state, action) {
            state.activeChatId = action.payload
        }
    }
})

export default messageSlice.reducer;

export const { setActiveChatId } = messageSlice.actions

export const getActiveChatId = (state: RootState) => state.message.activeChatId