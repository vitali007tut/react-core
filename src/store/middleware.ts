import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { userAuthSlice } from "./userAuthSlice";
import { dataKeeperAuth } from "../hooks/dataKeeperAuth";

export const userAuthMiddleware = createListenerMiddleware();

userAuthMiddleware.startListening({
    actionCreator: userAuthSlice.actions.setAuth,
    effect: (action) => {
        dataKeeperAuth.set(action.payload);
        if (action.payload) {
            toast.success(`Hello customer!`);
        } else {
            toast.success(`Have a good day... bye`);
        }
    },
});
