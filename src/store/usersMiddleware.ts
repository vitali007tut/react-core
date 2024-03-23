import { createListenerMiddleware } from "@reduxjs/toolkit";
import { arrayUsersSlice } from "./arrayUsersSlice";
import { dataKeeperLogin } from "../hooks/dataKeeperLogin";
import { dataKeeperUsers } from "../hooks/dataKeeperUsers";
import { IUser } from "../models/models";

export const usersMiddleware = createListenerMiddleware();

usersMiddleware.startListening({
    actionCreator: arrayUsersSlice.actions.addUserToDB,
    effect: (action) => {
        const state: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();
        state.users.push(action.payload);
        dataKeeperUsers.set(state);
        dataKeeperLogin.set(action.payload.email);
    },
});

usersMiddleware.startListening({
    actionCreator: arrayUsersSlice.actions.addFavToCurrentUser,
    effect: (action) => {
        const login = dataKeeperLogin.get();
        const state: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();
        state.users.forEach((e) => {
            if (e.email === login) {
                e.favorites.push(action.payload);
            }
        });
        dataKeeperUsers.set(state);
    },
});

usersMiddleware.startListening({
    actionCreator: arrayUsersSlice.actions.removeFavFromCurrentUser,
    effect: (action) => {
        const login = dataKeeperLogin.get();
        const state: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();
        state.users.forEach((e) => {
            if (e.email === login) {
                e.favorites = e.favorites.filter((item) => item.id !== action.payload.id);
            }
        });
        dataKeeperUsers.set(state);
    },
});

usersMiddleware.startListening({
    actionCreator: arrayUsersSlice.actions.addSearchToCurrentUser,
    effect: (action) => {
        const login = dataKeeperLogin.get();
        const state: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();
        state.users.forEach((e) => {
            if (e.email === login) {
                if (!e.history.includes(action.payload)) {
                    e.history.push(action.payload);
                }
            }
        });
        dataKeeperUsers.set(state);
    },
});

usersMiddleware.startListening({
    actionCreator: arrayUsersSlice.actions.removeSearchFromCurrentUser,
    effect: (action) => {
        const login = dataKeeperLogin.get();
        const state: { users: IUser[]; currentUser: string } = dataKeeperUsers.get();
        state.users.forEach((e) => {
            if (e.email === login) {
                e.history = e.history.filter((item) => item !== action.payload);
            }
        });
        dataKeeperUsers.set(state);
    },
});
