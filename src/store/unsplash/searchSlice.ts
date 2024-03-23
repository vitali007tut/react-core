import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataKeeperSearch } from "../../hooks/dataKeeperSearch";

interface ISearch {
    search: string;
}

const initialState: ISearch = {
    search: dataKeeperSearch.get(),
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
            dataKeeperSearch.set(action.payload);
        },
    },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
