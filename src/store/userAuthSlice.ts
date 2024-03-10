import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
    isAuth: boolean;
}

const initialState: IAuth = {
    isAuth: Boolean(localStorage.getItem("isAuth")),
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            console.log("setAuth", state.isAuth);
            localStorage.setItem("isAuth", state.isAuth.toString());
        },
    },
});

export const userAuthActions = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
