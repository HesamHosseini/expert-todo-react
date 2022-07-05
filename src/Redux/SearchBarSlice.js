import { createSlice } from "@reduxjs/toolkit";

export const SearchBarSlice = createSlice({
  name: "SearchBarSlice",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchInput } = SearchBarSlice.actions;
export default SearchBarSlice.reducer;
