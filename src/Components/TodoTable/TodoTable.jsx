import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import * as shamsi from 'shamsi-date-converter';

function TodoTable() {
  
  const todo = useSelector((state) => state.Todos.todos);
  const searchInput = useSelector((state) => state.SearchBar.value);
  const filterSelectorState = useSelector(
    (state) => state.FilterShowSlice.returnal
  );

  const search = () => {
  if(searchInput === "")
    return todo;
  else
    return todo.filter((item) =>
    item.TodoTitle.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
  };

  const filter = (todo) => {
  const fiterDefaultValue = { Priority: "All", Status: "All", DeadLine: "All" };
  const filterCheck = JSON.stringify(filterSelectorState) === JSON.stringify(fiterDefaultValue);
  const priorityFilter = () => {
    return todo.filter((item) => fiterDefaultValue.Priority === item.TodoPriority)
  }
  const statusFilter = () => {
    return todo.filter((item) => fiterDefaultValue.Status === item.TodoStatus)
  }
  const deadLineFilter = () => {
    const todayString = shamsi.gregorianToJalali(new Date());
    return todo.filter((item) => fiterDefaultValue.Status === item.TodoDeadLine)
  }
  if(filterCheck)
    return todo;
  else {
    
}}

const sort = (todo) => {
    //New ..........
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
        <TodoItem data={sort(filter(search()))} />
      </tbody>
    </table>
  );
}

export default TodoTable;
