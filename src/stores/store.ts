import {configureStore} from "@reduxjs/toolkit";
import {recipeSlice, userSlice} from "./reducers/users.ts";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        recipesThumbnail : recipeSlice.reducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']