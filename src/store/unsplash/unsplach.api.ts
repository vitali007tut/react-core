import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPhoto, ServerResponse } from '../../models/models'

export const unsplashApi = createApi({
    reducerPath: 'unsplash/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/',
    }),
    endpoints: build => ({
        searchPhotos: build.query<IPhoto[], string>({
            query: (search: string) => ({
                url: `search/photos`,
                params: {
                    client_id: 'HJboD6dYO80ohcm2nrbPeY2aavUsaoEtQY7bQnusOyQ',
                    query: search,
                    per_page: 5,
                    page: 1,
                }
            }),
            transformResponse: (response: ServerResponse<IPhoto>) => response.results,
        })
    })
})

export const {useSearchPhotosQuery} = unsplashApi