import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto, IUser } from "../models/models";
import { getUsersFromDB, receaveLogin, setAuthLoginToLs, setUsersToLs } from "../hooks/lsService";

const initialState: IUser[] = getUsersFromDB();

export const arrayUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUserToDB(state, action: PayloadAction<IUser>) {
            state.push(action.payload);
            setUsersToLs(state);
            setAuthLoginToLs(action.payload.email);
        },
        addFavToCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites.push(action.payload);
                }
            });
            setUsersToLs(state);
        },
        removeFavFromCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites = e.favorites.filter((item) => item.id !== action.payload.id);
                }
            });
            setUsersToLs(state);
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
            setUsersToLs(state);
        },
        removeSearchFromCurrentUser(state, action: PayloadAction<string>) {
            const login = receaveLogin();
            state.forEach((e) => {
                if (e.email === login) {
                    e.history = e.history.filter((item) => item !== action.payload);
                }
            });
            setUsersToLs(state);
        },
    },
});

export const arrayUsersActions = arrayUsersSlice.actions;
export const arrayUsersReducer = arrayUsersSlice.reducer;
