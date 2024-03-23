import { IUser } from "../models/models";

export const dataKeeperUsers = {
    get: (): IUser[] => {
        return JSON.parse(localStorage.getItem("arrayUsers") || "[]");
    },
    set: (value: IUser[]): void => {
        localStorage.setItem("arrayUsers", JSON.stringify(value));
    },
};
