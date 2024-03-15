// const loginedUser: CustomerDataType = JSON.parse(localStorage.getItem("LoginedUser"))

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../models/models";

interface IUser {
    email: string;
    password: string;
    favorites: IPhoto[];
    history: [];
}

// const user: IUser = JSON.parse(localStorage.getItem("LoginedUser") || '')
const initialState: IUser = {
    email: '',
    password: '',
    favorites: [],
    history: [],
};

export const userFavoritesSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFavToUser(state, action: PayloadAction<IPhoto>) {
            state.favorites.push(action.payload)
            localStorage.setItem('LoginedUser', JSON.stringify(state))
        }
    }
})

export const userFavoriteActions = userFavoritesSlice.actions;
export const userFavoriteReducer = userFavoritesSlice.reducer;