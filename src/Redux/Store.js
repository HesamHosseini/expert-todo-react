import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";
import ModalReducer from "./TodoModalSlice";
import modalInputReducer from "./ModalInputSlice";
import DisabledInputReducer from "./DisableInput";
import EditModeReducer from "./saveOrEditSlice";
import SearchBarSliceReducer from "./SearchBarSlice";
import FilterShowSliceReducer from "./FilterShowSlice"
export const store = configureStore({
  reducer: {
    Todos: TodoReducer,
    toggleModal: ModalReducer,
    modalInput: modalInputReducer,
    disabledInput: DisabledInputReducer,
    editMode: EditModeReducer,
    SearchBar: SearchBarSliceReducer,
    FilterShowSlice: FilterShowSliceReducer,
  },
});
