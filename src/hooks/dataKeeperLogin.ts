export const dataKeeperLogin = {
    get: (): string => {
        const data = localStorage.getItem("authLogin");
        return data ? data : "";
    },
    set: (value: string): void => {
        localStorage.setItem("authLogin", value);
    },
    remove: (): void => {
        localStorage.removeItem("authLogin");
    },
};
