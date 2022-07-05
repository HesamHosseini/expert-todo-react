import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleInputStatus } from "../../Redux/DisableInput";
import {
  setTodoDeadLine,
  setTodoDescription,
  setTodoInput,
  setTodoPriority,
  setTodoStatus,
} from "../../Redux/ModalInputSlice";
import { toggleEditMode } from "../../Redux/saveOrEditSlice";
import { toggleModalDisplay } from "../../Redux/TodoModalSlice";
import { deleteTodo } from "../../Redux/TodoSlice";
import StyleManager from "../../utils/StyleManager";

function TodoItem({ data }) {
  const editMode = useSelector((state) => state.editMode.editMode);
  const dispatch = useDispatch();

  const handleViewTodo = (id) => {
    const selectedTodo = data.find((todo) => todo.id === id);
    dispatch(setTodoInput(selectedTodo.TodoTitle));
    dispatch(setTodoPriority(selectedTodo.TodoPriority));
    dispatch(setTodoDeadLine(selectedTodo.TodoDeadLine));
    dispatch(setTodoStatus(selectedTodo.TodoStatus));
    dispatch(setTodoDescription(selectedTodo.TodoDescription));
    dispatch(toggleInputStatus(true));
    dispatch(toggleModalDisplay());
    console.log(selectedTodo);
  };

  const handleEditTodo = (id) => {
    const selectedTodo = data.find((todo) => todo.id === id);
    dispatch(setTodoInput(selectedTodo.TodoTitle));
    dispatch(setTodoPriority(selectedTodo.TodoPriority));
    dispatch(setTodoDeadLine(selectedTodo.TodoDeadLine));
    dispatch(setTodoStatus(selectedTodo.TodoStatus));
    dispatch(setTodoDescription(selectedTodo.TodoDescription));
    dispatch(toggleModalDisplay());
    dispatch(toggleEditMode({ status: true, id: id }));
  };

  return data.map(
    ({
      id,
      TodoTitle,
      TodoStatus,
      TodoPriority,
      TodoDeadLine,
      TodoDescription,
    }) => (
      <tr key={id} style={{ padding: "3rem" }}>
        <td className="py-5">{TodoTitle}</td>
        <td className="py-5 border border-y-0 border-gray-400">
          <span className={StyleManager.Priority(TodoPriority)}>
            {TodoPriority}
          </span>
        </td>
        <td className="py-5 border-y-0 border border-gray-400">
          <span className={StyleManager.Status(TodoStatus)}>{TodoStatus}</span>
        </td>
        <td className="py-5 border border-y-0  border-gray-400">
          <span className="rounded-full p-1 text-sm border border-cyan-600 bg-[#f5f6f7]">
            {TodoDeadLine}
          </span>
        </td>
        <td
          className="
              border-y-0 border border-gray-400
            "
        >
          <div className=" gap-3 h-full w-full flexCenter ">
            <button
              onClick={() => {
                dispatch(deleteTodo(id));
              }}
              className="rounded border bg-red-600 h-10 w-10 flexCenter"
            >
              <i className="text-white">
                <FaTrash />
              </i>
            </button>
            <button
              onClick={() => {
                handleEditTodo(id);
              }}
              className="rounded border bg-[#655DEA] h-10 w-10 flexCenter"
            >
              <i className="text-white text-2xl">
                <MdModeEditOutline />
              </i>
            </button>
            <button
              onClick={() => {
                handleViewTodo(id);
              }}
              className="rounded border bg-gray-500 h-10 w-10 flexCenter"
            >
              <i className="text-white text-2xl">
                <BsFillEyeFill />
              </i>
            </button>
          </div>
        </td>
      </tr>
    )
  );
}

export default TodoItem;
