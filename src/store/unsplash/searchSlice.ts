import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISearch {
    search: string;
}

const initialState: ISearch = {
    search: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
    }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer