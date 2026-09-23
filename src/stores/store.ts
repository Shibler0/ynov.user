import {configureStore} from "@reduxjs/toolkit";
import {recipeSlice, userSlice} from "./reducers/users.ts";
import authReducer from "./reducers/auth.ts";
import loadingReducer from "./reducers/loading";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authReducer,
        loading: loadingReducer,
        recipesThumbnail : recipeSlice.reducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']