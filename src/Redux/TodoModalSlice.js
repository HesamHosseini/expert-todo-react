import { createSlice } from "@reduxjs/toolkit";

export const TodoModalSlice = createSlice({
  name: "TodoModalSlice",
  initialState: {
    value: false,
  },
  reducers: {
    toggleModalDisplay: (state) => {
      state.value = !state.value;
      //   state.push(action.payload);
    },
  },
});

export const { toggleModalDisplay } = TodoModalSlice.actions;
export default TodoModalSlice.reducer;
