import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { userAuthSlice } from "./userAuthSlice";

export const userAuthMiddleware = createListenerMiddleware();

userAuthMiddleware.startListening({
    actionCreator: userAuthSlice.actions.setAuth,
    effect: (action) => {
        if (action.payload) {
            toast.success(`Hello customer!`);
        } else {
            toast.success(`Have a good day... bye`);
        }
    },
});
