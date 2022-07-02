import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/TodoSlice";
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

const PriorityOptions = ["Priority", "low", "Medium", "High"];
const StatusOptions = ["Status", "Todo", "Doing", "Done"];
export const Modal = ({ visible }) => {
  const { todoInput, todoPriority, todoStatus, todoDeadLine, todoDescription } =
    useSelector((state) => state.modalInput.value);
  const dispatch = useDispatch();
  //   *********************************************
  function handleSaveBtn() {
    const todo = {
      id: Date.now(),
      TodoTitle: todoInput,
      TodoStatus: todoPriority,
      TodoPriority: todoStatus,
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
              value={todoInput}
              placeholder="Enter you Todo"
              className="border-gray-500 border rounded outline-0 h-14 px-3"
              onChange={(e) => {
                dispatch(setTodoInput(e.target.value));
              }}
            />
            <div className="flex flex-row  justify-around  p-2 w-full gap-3">
              <TodoSelector
                options={PriorityOptions}
                state={todoPriority}
                setState={setTodoPriority}
              />
              <TodoSelector
                options={StatusOptions}
                state={todoStatus}
                setState={setTodoStatus}
              />
              <DatePicker
                value={todoDeadLine}
                calendar={persian}
                locale={persian_en}
                onChange={(value) => {
                  dispatch(setTodoDeadLine(value.format()));
                }}
              />
            </div>

            <textarea
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
                }}
                className="border border-[#590CE1] rounded p-2 text-[#590CE1]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBtn}
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
