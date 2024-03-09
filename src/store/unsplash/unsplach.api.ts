import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhoto, ServerResponse } from "../../models/models";

export const unsplashApi = createApi({
    reducerPath: "unsplash/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.unsplash.com/",
        method: 'GET',
        headers: {
            Authorization: import.meta.env.VITE_CLIEN_ID
        }
    }),
    endpoints: (build) => ({
        searchPhotos: build.query<IPhoto[], { search: string, per_page: string }>({
            query: ({ search, per_page }) => ({
                url: `search/photos`,
                params: {
                    query: search,
                    per_page,
                    // page: 1,
                },
            }),
            transformResponse: (response: ServerResponse<IPhoto>) => response.results,
        }),
        getPhotos: build.query<IPhoto[], void>({
            query: () => ({
                url: "photos",
                params: {
                },
            }),
        }),
    }),
});

export const { useSearchPhotosQuery, useLazySearchPhotosQuery, useGetPhotosQuery } = unsplashApi;
