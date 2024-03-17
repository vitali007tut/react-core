import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
    isAuth: boolean;
}

const initialState: IAuth = {
    isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            localStorage.setItem("isAuth", state.isAuth.toString());
        },
    },
});

export const userAuthActions = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
