import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../api/store";

interface InitialStateInterface {
    profileMenuId: number
}

const initialState: InitialStateInterface = {
    profileMenuId: 1
}

const menuSlice = createSlice({
    name: 'profileMenu',
    initialState,
    reducers: {
        updateProfileMenuId (state, action) {
            state.profileMenuId = action.payload
        } 
    }
})

export default menuSlice.reducer;

export const { updateProfileMenuId } = menuSlice.actions

export const getProfileMenuId = (state: RootState) => state.menu.profileMenuId