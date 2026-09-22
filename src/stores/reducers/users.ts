import type User from "../../types/user.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: User[];
}

export interface RecipeThumbnail {
    id : number;
    name: string;
    prepTimeMinutes: number;
    image: string;
}

const initialState: UserState = {
    users: [],
}

interface RecipeState {
    recipes: RecipeThumbnail[];
}

const initialRecipeState: RecipeState = {
    recipes: [],
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
    }
})

export const recipeSlice = createSlice({
    name: "recipe",
    initialState: initialRecipeState,
    reducers: {
        setRecipesThumbnail: (state, action: PayloadAction<RecipeThumbnail[]>) => {
            state.recipes = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;
export const { setRecipesThumbnail } = recipeSlice.actions;

export default userSlice.reducer;