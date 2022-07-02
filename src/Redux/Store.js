import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";
import ModalReducer from "./TodoModalSlice";
import modalInputReducer from "./ModalInputSlice";

export const store = configureStore({
  reducer: {
    Todos: TodoReducer,
    toggleModal: ModalReducer,
    modalInput: modalInputReducer,
  },
});
