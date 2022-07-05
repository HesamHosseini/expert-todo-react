import { createSlice } from "@reduxjs/toolkit";

export const SaveOrEditSlice = createSlice({
  name: "SaveOrEditSlice",
  initialState: {
    editMode: false,
    editId: 0,
  },
  reducers: {
    toggleEditMode: (state, action) => {
      state.editMode = action.payload.status;
      state.editId = action.payload.id;
    },
  },
});

export const { toggleEditMode } = SaveOrEditSlice.actions;

export default SaveOrEditSlice.reducer;
