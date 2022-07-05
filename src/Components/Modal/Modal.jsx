import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../../Redux/TodoSlice";
import { TodoSelector } from "../TodoSelector/TodoSelector";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import { toggleModalDisplay } from "../../Redux/TodoModalSlice";
import {
  setTodoInput,
  setTodoDeadLine,
  setTodoDescription,
  setTodoPriority,
  setTodoStatus,
} from "./../../Redux/ModalInputSlice";
import { toggleInputStatus } from "../../Redux/DisableInput";

import { toggleEditMode } from "../../Redux/saveOrEditSlice";
const PriorityOptions = ["Priority", "Low", "Medium", "High"];
const StatusOptions = ["Status", "Todo", "Doing", "Done"];
export const Modal = ({ visible }) => {
  const { todoInput, todoPriority, todoStatus, todoDeadLine, todoDescription } =
    useSelector((state) => state.modalInput.value);
  const dispatch = useDispatch();

  const inputDisableStatus = useSelector((state) => state.disabledInput.value);
  const editMode = useSelector((state) => state.editMode);
  //   *********************************************
  function handleSaveBtn(todoId) {
    if (!inputDisableStatus && !editMode.editMode) {
      console.log("we are in ADDing mode");
      const todo = {
        id: Date.now(),
        TodoTitle: todoInput,
        TodoPriority: todoPriority,
        TodoStatus: todoStatus,
        TodoDeadLine: todoDeadLine,
        TodoDescription: todoDescription,
      };
      dispatch(addTodo(todo));
      dispatch(toggleModalDisplay());
      dispatch(setTodoDescription(""));
      dispatch(setTodoDeadLine(""));
      dispatch(setTodoStatus(""));
      dispatch(setTodoPriority(""));
      dispatch(setTodoInput(""));
      dispatch(toggleInputStatus(false));
    } else if (editMode.editMode) {
      const editedTodo = {
        id: todoId,
        TodoTitle: todoInput,
        TodoPriority: todoPriority,
        TodoStatus: todoStatus,
        TodoDeadLine: todoDeadLine,
        TodoDescription: todoDescription,
      };

      console.log("we are in edit mode");
      dispatch(toggleModalDisplay());
      dispatch(setTodoDescription(""));
      dispatch(setTodoDeadLine(""));
      dispatch(setTodoStatus(""));
      dispatch(setTodoPriority(""));
      dispatch(setTodoInput(""));
      dispatch(toggleInputStatus(false));
      dispatch(toggleEditMode({ status: false, id: 0 }));
      dispatch(editTodo(editedTodo));
    } else if (inputDisableStatus) {
      console.log("we are in view mode");
      dispatch(toggleModalDisplay());
      dispatch(setTodoDescription(""));
      dispatch(setTodoDeadLine(""));
      dispatch(setTodoStatus(""));
      dispatch(setTodoPriority(""));
      dispatch(setTodoInput(""));
      dispatch(toggleInputStatus(false));
    }
  }

  //   *********************************************

  if (!visible) return null;
  else
    return (
      <div className="fixed font-medium top-0 inset-0 bg-black bg-opacity-30 backdrop-blur flexCenter ">
        <div className="bg-white p-2 rounded  w-[55%] mx-auto flexCenter">
          <div className="w-[97%] flex  flex-col    gap-12">
            <h1 className="justify-start content-start justify-self-start border-b-black border-b py-4">
              New Task
            </h1>
            <input
              disabled={inputDisableStatus ? true : false}
              value={todoInput}
              placeholder="Enter you Todo"
              className="border-gray-500 border rounded outline-0 h-14 px-3"
              onChange={(e) => {
                dispatch(setTodoInput(e.target.value));
              }}
            />
            <div className="flex flex-row  justify-around  p-2 w-full gap-3">
              <TodoSelector
                disableStatus={inputDisableStatus}
                options={PriorityOptions}
                state={todoPriority}
                setState={setTodoPriority}
              />
              <TodoSelector
                disableStatus={inputDisableStatus}
                options={StatusOptions}
                state={todoStatus}
                setState={setTodoStatus}
              />
              <DatePicker
                style={{
                  backgroundColor: "#fff",
                  height: "65px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  padding: "3px 10px",
                }}
                disabled={inputDisableStatus ? true : false}
                value={todoDeadLine}
                calendar={persian}
                locale={persian_en}
                onChange={(value) => {
                  dispatch(setTodoDeadLine(value.format()));
                }}
              />
            </div>

            <textarea
              disabled={inputDisableStatus ? true : false}
              value={todoDescription}
              placeholder="Details (optional)"
              className="px-3 w-full h-28 border rounded border-gray-500"
              onChange={(e) => {
                dispatch(setTodoDescription(e.target.value));
              }}
            ></textarea>

            <div className="p-5 flex justify-between flex-row ">
              <button
                onClick={() => {
                  dispatch(toggleModalDisplay());
                  dispatch(setTodoDescription(""));
                  dispatch(setTodoDeadLine(""));
                  dispatch(setTodoStatus(""));
                  dispatch(setTodoPriority(""));
                  dispatch(setTodoInput(""));
                  dispatch(toggleInputStatus(false));
                  dispatch(toggleEditMode({ status: false, id: 0 }));
                }}
                className="border border-[#590CE1] rounded p-2 text-[#590CE1]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSaveBtn(editMode.editId);
                }}
                className="bg-[#590CE1] rounded p-2 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

function handleChange(value) {}
