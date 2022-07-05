import { createSlice } from "@reduxjs/toolkit";

export const DisableInput = createSlice({
  name: "DisableInput",
  initialState: { value: false },
  reducers: {
    toggleInputStatus: (state , action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleInputStatus } = DisableInput.actions;

export default DisableInput.reducer;
