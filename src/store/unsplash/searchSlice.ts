import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSearchWord, setSearchWord } from "../../hooks/lsService";

interface ISearch {
    search: string;
}

const initialState: ISearch = {
    search: getSearchWord(),
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
            setSearchWord(action.payload)
        },
    },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
