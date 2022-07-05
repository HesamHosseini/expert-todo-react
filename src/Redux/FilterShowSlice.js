import { createSlice } from "@reduxjs/toolkit";

export const FilterShowSlice = createSlice({
  name: "FilterShowSlice",
  initialState: {
    value: 0,
    returnal: { Priority: "All", Status: "All", DeadLine: "All" },
  },
  reducers: {
    filterShowState: (state, action) => {
      state.value = action.payload;
    },
    setPriorityFilter: (state, action) => {
      state.returnal.Priority = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.returnal.Status = action.payload;
    },
    setDeadLineFilter: (state, action) => {
      state.returnal.DeadLine = action.payload;
    },
  },
});
export const {
  filterShowState,
  setPriorityFilter,
  setStatusFilter,
  setDeadLineFilter,
} = FilterShowSlice.actions;

export default FilterShowSlice.reducer;
