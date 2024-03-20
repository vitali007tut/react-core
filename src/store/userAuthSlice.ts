import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuthStatus, setAuthToLs } from "../hooks/lsService";

interface IAuth {
    isAuth: boolean;
}

const initialState: IAuth = {
    isAuth: getAuthStatus(),
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            setAuthToLs(state.isAuth.toString());
        },
    },
});

export const userAuthActions = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
