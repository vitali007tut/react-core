import { configureStore } from "@reduxjs/toolkit";
import { unsplashApi } from "./unsplash/unsplach.api";
import { searchReducer } from "./unsplash/searchSlice";
import { userAuthReducer } from "./userAuthSlice";
import { arrayUsersReducer } from "./arrayUsersSlice";
import { userAuthMiddleware } from "./middleware";

const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        searchUnsplash: searchReducer,
        userAuth: userAuthReducer,
        arrayUsers: arrayUsersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(unsplashApi.middleware).concat(userAuthMiddleware.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
