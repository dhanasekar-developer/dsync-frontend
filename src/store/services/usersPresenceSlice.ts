import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../api/store"


interface InitialStateInterface {
    user_id: string,
    is_online: boolean,
    last_seen: string,
}

const initialState: InitialStateInterface[] = []

const usersPresenceSlice = createSlice({
    name: 'usersPresence',
    initialState,
    reducers: {
        setUsersPrecence(_, action) {
            return action.payload
        },

        updateUserPrecence(state, action) {
            const user = action.payload
            const index = state.findIndex(e => e.user_id == user.user_id)

            if(index != -1){
                state[index] = user
            }
            else{
                state.push(user)
            }
        }
    }
})

export default usersPresenceSlice.reducer;

export const { setUsersPrecence, updateUserPrecence } = usersPresenceSlice.actions;

export const getUsersPresence = (state: RootState) => state.usersPresence;