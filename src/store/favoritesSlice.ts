import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../models/models";

interface IFavorites {
    arrayFav: IPhoto[];
}

const initialState: IFavorites = {
    arrayFav: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

export const favoritesSlice = createSlice({
    name: "arrayFav",
    initialState,
    reducers: {
        setFav(state, action: PayloadAction<IPhoto>) {
            state.arrayFav.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.arrayFav));
        },
        removeFav(state, action: PayloadAction<IPhoto>) {
            const array = state.arrayFav.filter((item) => item.id !== action.payload.id);
            state.arrayFav = array;
            localStorage.setItem("favorites", JSON.stringify(state.arrayFav));
        },
    },
});

export const favoriteActions = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
