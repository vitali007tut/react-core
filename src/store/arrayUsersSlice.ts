import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto, IUser } from "../models/models.ts";
import { receaveLogin } from "../hooks/lsService.ts";

const initialState: IUser[] = JSON.parse(localStorage.getItem("arrayUsers") || "[]");

export const arrayUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addToArray(state, action: PayloadAction<IUser>) {
            state.push(action.payload);
            localStorage.setItem("arrayUsers", JSON.stringify(state));
            localStorage.setItem("authLogin", action.payload.email);
        },
        addFavToCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites.push(action.payload);
                }
            });
            localStorage.setItem("arrayUsers", JSON.stringify(state));
        },
        removeFavFromCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites = e.favorites.filter((item) => item.id !== action.payload.id);
                }
            });
            localStorage.setItem("arrayUsers", JSON.stringify(state));
        },
        addSearchToCurrentUser(state, action: PayloadAction<string>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    if (!e.history.includes(action.payload)) {
                        e.history.push(action.payload);
                    }
                }
            });
            localStorage.setItem("arrayUsers", JSON.stringify(state));
        },
        removeSearchFromCurrentUser(state, action: PayloadAction<string>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.history = e.history.filter((item) => item !== action.payload);
                }
            });
            localStorage.setItem("arrayUsers", JSON.stringify(state));
        },
    },
});

export const arrayUsersActions = arrayUsersSlice.actions;
export const arrayUsersReducer = arrayUsersSlice.reducer;
