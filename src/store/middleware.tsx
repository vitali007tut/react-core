import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { userAuthSlice } from "./userAuthSlice";

export const userAuthMiddleware = createListenerMiddleware();

userAuthMiddleware.startListening({
    actionCreator: userAuthSlice.actions.setAuth,
    effect: (action) => {
        if (action.payload) {
            toast.success(`User signed in`);
        } else {
            toast.success(`User log out`);
        }
    },
});
