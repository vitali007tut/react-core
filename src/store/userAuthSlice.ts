import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getAuthStatus, setAuthToLs } from "../hooks/lsService";
import { dataKeeperAuth } from "../hooks/dataKeeperAuth";

interface IAuth {
    isAuth: boolean;
}

const initialState: IAuth = {
    // isAuth: getAuthStatus(),
    isAuth: dataKeeperAuth.get(),
};

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
            // setAuthToLs(state.isAuth.toString());
            dataKeeperAuth.set(state.isAuth);
        },
    },
});

export const userAuthActions = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;
