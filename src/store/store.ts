import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";


export const store = configureStore({
    reducer: {
        users: reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch