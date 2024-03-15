import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { searchActions } from "../store/unsplash/searchSlice";
import { userAuthActions } from "../store/userAuthSlice";
import { favoriteActions } from "../store/favoritesSlice";
import { userFavoriteActions } from "../store/userFavoritesSlice";
import {customerAuthActions} from "../store/customerAuthSlice.ts";

const actions = {
    ...searchActions,
    ...userAuthActions,
    ...favoriteActions,
    ...userFavoriteActions,
    ...customerAuthActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
