export const dataKeeperSearch = {
    get: (): string => {
        const data = localStorage.getItem("Search word");
        return data ? data : "";
    },
    set: (value: string): void => {
        localStorage.setItem("Search word", value);
    },
    // remove: (key: string): void => {
    //     localStorage.removeItem(key)
    // }
};
