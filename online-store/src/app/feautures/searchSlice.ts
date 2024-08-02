import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  search: "",
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    }
  }
})

export default searchSlice.reducer;
export const getSearch = ((state: RootState) => state.search.search);
export const { changeSearch } = searchSlice.actions;