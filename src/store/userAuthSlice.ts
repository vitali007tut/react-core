import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataKeeperAuth } from "../hooks/dataKeeperAuth";

interface IAuth {
    isAuth: boolean;
}

const initialState: IAuth = {
    isAuth: dataKeeperAuth.get(),
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        },
    },
});

export const userAuthActions = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
