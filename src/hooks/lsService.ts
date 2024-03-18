import { IPhoto, IUser } from "../models/models";

export function isUserExists(userEmail: string) {
    if (!localStorage.getItem("arrayUsers")) return false;
    const usersLs: IUser[] = JSON.parse(localStorage.getItem("arrayUsers") || "");

    if (!usersLs.length) return false;
    const arrayExistIds = usersLs.map((userLs) => userLs.email);
    return arrayExistIds.includes(userEmail);
}

export function isCorrectData(email: string, password: string) {
    if (!localStorage.getItem("arrayUsers")) return false;
    const usersLs: IUser[] = JSON.parse(localStorage.getItem("arrayUsers") || "");
    if (!usersLs.length) return false;
    const userInArray: IUser[] = usersLs.filter((userLs) => userLs.email === email);

    return userInArray[0].email === email && userInArray[0].password === password;
}

export function receaveUserfromLs(email: string): IUser {
    const usersLs: IUser[] = JSON.parse(localStorage.getItem("arrayUsers") || "");
    const userInArray: IUser[] = usersLs.filter((userLs) => userLs.email === email);
    return userInArray[0];
}

export function receaveCurrentUserfromLs(): IUser {
    return JSON.parse(localStorage.getItem("currentUser") || "");
}

export function receaveCurrentFavorites(): IPhoto[] {
    if (!localStorage.getItem("currentUser")) return [];
    const currentUser: IUser = JSON.parse(localStorage.getItem("currentUser") || "");
    return currentUser.favorites;
}

export function receaveCurrentEmail(): string {
    if (!localStorage.getItem("currentUser")) return "";
    const currentUser: IUser = JSON.parse(localStorage.getItem("currentUser") || "");
    return currentUser.email;
}

export function receaveCurrentPassword(): string {
    if (!localStorage.getItem("currentUser")) return "";
    const currentUser: IUser = JSON.parse(localStorage.getItem("currentUser") || "");
    return currentUser.password;
}

export function receaveLogin(): string {
    return localStorage.getItem("authLogin") || "";
}

export function cleareLogin(): void {
    localStorage.removeItem("authLogin");
}

export function setUser(login: string): void {
    localStorage.setItem("authLogin", login);
}

export function getFavoritesArray(users: IUser[]): IPhoto[] {
    let favorites: IPhoto[] = [];
    const login = receaveLogin();
    users.filter((user) => {
        if (user.email === login) {
            favorites = [...user.favorites];
        }
    });

    return favorites;
}

export function getHistoryArray(users: IUser[]): string[] {
    let history: string[] = [];
    const login = receaveLogin();
    users.forEach((user) => {
        if (user.email === login) {
            history = [...user.history];
        }
    });

    return history;
}

export function setAuthToLs(value: string) {
    localStorage.setItem("isAuth", value);
}
