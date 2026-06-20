import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import messageReducer from '../services/messageSlice'
import menuReducer from '../services/menuSlice'
import authReducer from '../services/authSlice'

const appReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    message: messageReducer,
    menu: menuReducer,
    auth: authReducer,
})

const rootReducer = ( state: ReturnType<typeof appReducer> | undefined, action: any ) => {
    // console.log('action.type:', action.type)
    if(action.type == 'app/logout'){
        state = undefined
    }
    const result = appReducer(state, action)
    // console.log('state after:', result.auth)
    return result
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;