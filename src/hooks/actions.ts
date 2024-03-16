import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { searchActions } from "../store/unsplash/searchSlice";
import { userAuthActions } from "../store/userAuthSlice";
import { favoriteActions } from "../store/favoritesSlice";
import { arrayUsersActions } from "../store/arrayUsersSlice.ts";

const actions = {
    ...searchActions,
    ...userAuthActions,
    ...arrayUsersActions,

    //*****! */
    ...favoriteActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
