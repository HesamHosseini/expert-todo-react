import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { deleteTodo, editTodo } from "../../Redux/TodoSlice";
import { DatePicker } from "jalali-react-datepicker";
// import { DatePicker } from "jalali-react-datepicker";

function TodoTable() {
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();

  const theme = {
    headBackColor: "#b1b",
  };
  return (
    <table className="w-full table-fixed ">
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Status</th>
          <th>DeadLine</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody className="text-center p-5">
        {todos.todos.map(
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
              <td className="py-5">{TodoStatus}</td>
              <td className="py-5">{TodoPriority}</td>
              <td className="py-5">{TodoDeadLine}</td>
              <td
                className="
              "
              >
                <div className="gap-3 h-full w-full flexCenter ">
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
                    onClick={() => dispatch(editTodo({ id: id }))}
                    className="rounded border bg-[#655DEA] h-10 w-10 flexCenter"
                  >
                    <i className="text-white text-2xl">
                      <MdModeEditOutline />
                    </i>
                  </button>
                  <button className="rounded border bg-gray-500 h-10 w-10 flexCenter">
                    <i className="text-white text-2xl">
                      <BsFillEyeFill />
                    </i>
                  </button>
                </div>
              </td>
            </tr>
          )
        )}
      </tbody>
      <DatePicker theme={theme}></DatePicker>
    </table>
  );
}

export default TodoTable;
