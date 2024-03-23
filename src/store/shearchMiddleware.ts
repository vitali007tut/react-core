import { createListenerMiddleware } from "@reduxjs/toolkit";
import { searchSlice } from "./unsplash/searchSlice";
import { dataKeeperSearch } from "../hooks/dataKeeperSearch";

export const searchMiddleware = createListenerMiddleware();

searchMiddleware.startListening({
    actionCreator: searchSlice.actions.changeSearch,
    effect: (action) => {
        dataKeeperSearch.set(action.payload);
    },
});
