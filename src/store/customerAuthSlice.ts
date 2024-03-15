import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IUser} from "../models/models.ts";

// type CustomerDataType = {
//     email: string;
//     password: string;
//     history: string[];
//     favorites: string[];
// };

// const user: IUser = JSON.parse(localStorage.getItem("LoginedUser") || '')
const initialState: IUser = {
    email: '',
    password: '',
    favorites: [],
    history: [],
};

export const customerAuthSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addLoginedUser(state, action: PayloadAction<IUser>) {
            // state.favorites.push(action.payload)
            state = action.payload
            localStorage.setItem('LoginedUser', JSON.stringify(state))
        },
        removeLoginedUser(state, action: PayloadAction<IUser>) {
            console.log(state, action.payload)
            JSON.parse(localStorage.getItem('LoginedUser') || '')
            localStorage.removeItem('LoginedUser')
        }
    }
})

export const customerAuthActions = customerAuthSlice.actions;
export const customerAuthReducer = customerAuthSlice.reducer;