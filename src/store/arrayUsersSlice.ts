import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto, IUser } from "../models/models";
import { dataKeeperUsers } from "../hooks/dataKeeperUsers";

const initialState: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();

export const arrayUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUserToDB(state, action: PayloadAction<IUser>) {
            state.users.push(action.payload);
            state.currentUser = action.payload.email;
        },
        setCurrentUser(state, action: PayloadAction<string>) {
            state.currentUser = action.payload;
        },
        addFavToCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = state.currentUser;
            state.users.forEach((e) => {
                if (e.email === login) {
                    e.favorites.push(action.payload);
                }
            });
        },
        removeFavFromCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = state.currentUser;
            state.users.forEach((e) => {
                if (e.email === login) {
                    e.favorites = e.favorites.filter((item) => item.id !== action.payload.id);
                }
            });
        },
        addSearchToCurrentUser(state, action: PayloadAction<string>) {
            const login = state.currentUser;
            state.users.forEach((e) => {
                if (e.email === login) {
                    if (!e.history.includes(action.payload)) {
                        e.history.push(action.payload);
                    }
                }
            });
        },
        removeSearchFromCurrentUser(state, action: PayloadAction<string>) {
            const login = state.currentUser;
            state.users.forEach((e) => {
                if (e.email === login) {
                    e.history = e.history.filter((item) => item !== action.payload);
                }
            });
        },
    },
});

export const arrayUsersActions = arrayUsersSlice.actions;
export const arrayUsersReducer = arrayUsersSlice.reducer;
