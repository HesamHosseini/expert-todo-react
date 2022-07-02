import { createSlice } from "@reduxjs/toolkit";
import { Result } from "postcss";

export const TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    todos: [
      {
        TodoDeadLine: "1401/04/08",
        TodoDescription: "This is a test todo description",
        TodoPriority: "Todo",
        TodoStatus: "low",
        TodoTitle: "test Todo",
        id: 1656498869165,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id } = action.payload;
      
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
