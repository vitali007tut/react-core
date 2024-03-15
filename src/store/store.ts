import { configureStore } from "@reduxjs/toolkit";
import { unsplashApi } from "./unsplash/unsplach.api";
import { searchReducer } from "./unsplash/searchSlice";
import { userAuthReducer } from "./userAuthSlice";
import { favoriteReducer } from "./favoritesSlice";
import { userFavoriteReducer } from "./userFavoritesSlice";
import {customerAuthReducer} from "./customerAuthSlice.ts";

const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        searchUnsplash: searchReducer,
        userAuth: userAuthReducer,
        favorites: favoriteReducer,
        userFavorites: userFavoriteReducer,
        customerAuth: customerAuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
