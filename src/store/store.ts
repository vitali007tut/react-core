import { configureStore } from '@reduxjs/toolkit'
import { unsplashApi } from './unsplash/unsplach.api'

const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(unsplashApi.middleware)
})

export default store