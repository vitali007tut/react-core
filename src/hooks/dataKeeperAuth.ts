export const dataKeeperAuth = {
    get: (): boolean => {
        return localStorage.getItem("isAuth") === "true" ? true : false;
    },
    set: (value: boolean): void => {
        localStorage.setItem("isAuth", value.toString());
    },
};
