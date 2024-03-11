import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavorites {
    arrayFav: string[];
}

const initialState: IFavorites = {
    // const loginedUser: CustomerDataType = JSON.parse(localStorage.getItem("LoginedUser"))
    arrayFav: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
    name: "arrayFav",
    initialState,
    reducers: {
        setFav(state, action: PayloadAction<string>) {
            console.log(Array.from(state.arrayFav), action.payload);
            state.arrayFav = Array.from(state.arrayFav);
            state.arrayFav.push(action.payload);
            console.log("setFav", state.arrayFav);
            localStorage.setItem("favorites", JSON.stringify(state.arrayFav));
            // user.likes = state.arrayFav
            // localStorage.setItem("LoginedUser", user);
        },
    },
});

export const favoriteActions = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
