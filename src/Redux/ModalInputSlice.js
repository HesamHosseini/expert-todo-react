import { createSlice } from "@reduxjs/toolkit";

export const ModalInputSlice = createSlice({
  name: "ModalInputSlice",
  initialState: {
    value: {
      todoInput: "",
      todoPriority: "",
      todoStatus: "",
      todoDeadLine: "",
      todoDescription: "",
    },
  },
  reducers: {
    setTodoInput: (state, action) => {
      state.value = {...state.value,  todoInput: action.payload };
    },
    setTodoPriority: (state, action) => {
      state.value = {...state.value,  todoPriority: action.payload };
    },
    setTodoStatus: (state, action) => {
      state.value = {...state.value, todoStatus: action.payload };
    },
    setTodoDeadLine: (state, action) => {
      state.value = {...state.value,  todoDeadLine: action.payload };
    },
    setTodoDescription: (state, action) => {
      state.value = {...state.value,  todoDescription: action.payload };
    },
  },
});

export const {
  setTodoInput,
  setTodoDeadLine,
  setTodoDescription,
  setTodoPriority,
  setTodoStatus,
} = ModalInputSlice.actions;
export default ModalInputSlice.reducer;
