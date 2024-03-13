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
            state.arrayFav = Array.from(state.arrayFav);
            state.arrayFav.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.arrayFav));
            // const id = action.payload
            // const { data } = useGetPhotoQuery({ id })
            // console.log(data);
            
            // user.likes = state.arrayFav
            // localStorage.setItem("LoginedUser", user);
        },
        removeFav(state, action: PayloadAction<string>) {
            const array = state.arrayFav.filter(item => item !== action.payload)
            state.arrayFav = array
            localStorage.setItem("favorites", JSON.stringify(state.arrayFav));
        }
    },
});

export const favoriteActions = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
