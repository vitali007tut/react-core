import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto, IUser } from "../models/models";
// import { getUsersFromDB, receaveLogin, setAuthLoginToLs, setUsersToLs } from "../hooks/lsService";
import { dataKeeperLogin } from "../hooks/dataKeeperLogin";
import { dataKeeperUsers } from "../hooks/dataKeeperUsers";

const initialState: IUser[] = dataKeeperUsers.get();

export const arrayUsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUserToDB(state, action: PayloadAction<IUser>) {
            state.push(action.payload);
            dataKeeperUsers.set(state);
            // setAuthLoginToLs(action.payload.email);
            dataKeeperLogin.set(action.payload.email);
        },
        addFavToCurrentUser(state, action: PayloadAction<IPhoto>) {
            const login = dataKeeperLogin.get();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites.push(action.payload);
                }
            });
            dataKeeperUsers.set(state);
        },
        removeFavFromCurrentUser(state, action: PayloadAction<IPhoto>) {
            // const login = receaveLogin();
            const login = dataKeeperLogin.get();
            state.forEach((e) => {
                if (e.email === login) {
                    e.favorites = e.favorites.filter((item) => item.id !== action.payload.id);
                }
            });
            dataKeeperUsers.set(state);
        },
        addSearchToCurrentUser(state, action: PayloadAction<string>) {
            // const login = receaveLogin();
            const login = dataKeeperLogin.get();
            state.forEach((e) => {
                if (e.email === login) {
                    if (!e.history.includes(action.payload)) {
                        e.history.push(action.payload);
                    }
                }
            });
            dataKeeperUsers.set(state);
        },
        removeSearchFromCurrentUser(state, action: PayloadAction<string>) {
            // const login = receaveLogin();
            const login = dataKeeperLogin.get();
            state.forEach((e) => {
                if (e.email === login) {
                    e.history = e.history.filter((item) => item !== action.payload);
                }
            });
            dataKeeperUsers.set(state);
        },
    },
});

export const arrayUsersActions = arrayUsersSlice.actions;
export const arrayUsersReducer = arrayUsersSlice.reducer;
