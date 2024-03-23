import { IUser } from "../models/models";

export const dataKeeperUsers = {
    get: (): { users: IUser[]; currentUser: string } => {
        if (localStorage.getItem("arrayUsers")) {
            return JSON.parse(localStorage.getItem("arrayUsers") || "");
        } else {
            return { users: [], currentUser: "" };
        }
    },
    set: (obj: { users: IUser[]; currentUser: string }): void => {
        localStorage.setItem("arrayUsers", JSON.stringify(obj));
    },
};

// { users: IUser[], currentUser: string }
