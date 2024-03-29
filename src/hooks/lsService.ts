import { IPhoto, IUser } from "../models/models";

export function isUserExists(userEmail: string) {
    if (!localStorage.getItem("arrayUsers")) return false;
    const usersLs: { users: IUser[]; currentUser: string } = JSON.parse(
        localStorage.getItem("arrayUsers") || "",
    );

    if (!usersLs.users.length) return false;
    const arrayExistIds = usersLs.users.map((userLs) => userLs.email);
    return arrayExistIds.includes(userEmail);
}

export function isCorrectData(email: string, password: string) {
    if (!localStorage.getItem("arrayUsers")) return false;
    const usersLs: { users: IUser[]; currentUser: string } = JSON.parse(
        localStorage.getItem("arrayUsers") || "",
    );
    if (!usersLs.users.length) return false;
    const userInArray: IUser[] = usersLs.users.filter((userLs) => userLs.email === email);

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

export function getUserFavorites(users: IUser[]): IPhoto[] {
    const login = receaveLogin();
    const user: IUser | undefined = users.find((user) => user.email === login);
    if (user) return user.favorites;

    return [];
}

export function getUserHistory(users: IUser[]): string[] {
    const login = receaveLogin();
    const user: IUser | undefined = users.find((user) => user.email === login);
    if (user) return user.history;

    return [];
}

export function setAuthToLs(value: string) {
    localStorage.setItem("isAuth", value);
}

export function getAuthStatus(): boolean {
    return localStorage.getItem("isAuth") === "true" ? true : false;
}

export function setSearchWord(value: string): void {
    localStorage.setItem("Search word", value);
}

export function getSearchWord(): string {
    return localStorage.getItem("Search word") || "";
}

export function getUsersFromDB(): IUser[] {
    return JSON.parse(localStorage.getItem("arrayUsers") || "[]");
}

export function setUsersToLs(value: IUser[]): void {
    localStorage.setItem("arrayUsers", JSON.stringify(value));
}

export function setAuthLoginToLs(value: string): void {
    localStorage.setItem("authLogin", value);
}
