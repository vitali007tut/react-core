import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { searchActions } from "../store/unsplash/searchSlice";
import { userAuthActions } from "../store/userAuthSlice";

const actions = {
    ...searchActions,
    ...userAuthActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
