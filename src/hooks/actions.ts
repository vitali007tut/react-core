import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { searchActions } from "../store/unsplash/searchSlice";
import { userAuthActions } from "../store/userAuthSlice";
import { arrayUsersActions } from "../store/arrayUsersSlice";

const actions = {
    ...searchActions,
    ...userAuthActions,
    ...arrayUsersActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
