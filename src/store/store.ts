import { configureStore } from "@reduxjs/toolkit";
import { unsplashApi } from "./unsplash/unsplach.api";
import { searchReducer } from "./unsplash/searchSlice";

const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        searchUnsplash: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
