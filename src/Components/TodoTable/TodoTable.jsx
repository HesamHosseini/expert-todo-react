import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import * as shamsi from "shamsi-date-converter";

function TodoTable() {
  const todo = useSelector((state) => state.Todos.todos);
  const searchInput = useSelector((state) => state.SearchBar.value);
  const filterSelectorState = useSelector(
    (state) => state.FilterShowSlice.returnal
  );

  const search = () => {
    if (searchInput === "") return todo;
    else
      return todo.filter((item) =>
        item.TodoTitle.toLocaleLowerCase().includes(
          searchInput.toLocaleLowerCase()
        )
      );
  };

  const filter = (todo) => {
    const fiterDefaultValue = {
      Priority: "All",
      Status: "All",
      DeadLine: "All",
    };
    const filterCheck =
      JSON.stringify(filterSelectorState) === JSON.stringify(fiterDefaultValue);
    const priorityFilter = (todo) => {
      if (filterSelectorState.Priority === "All") return todo;
      else
        return todo.filter(
          (item) => filterSelectorState.Priority === item.TodoPriority
        );
    };
    const statusFilter = (todo) => {
      if (filterSelectorState.Status === "All") return todo;
      else {
        return todo.filter((item) => {
          console.log(item);
          if (filterSelectorState.Status === item.TodoStatus) return item;
        });
      }
    };
    const deadLineFilter = (todo) => {
      if (filterSelectorState.DeadLine === "All") return todo;
      else {
        const today = shamsi.gregorianToJalali(new Date());
        // [1401 , 4 , 14] , //   1401/4/3 => [1401 , 4 , 3]
        const compareDate = (dateString) => {
          const date = dateString.split("/");
          if (
            (date[0] > today[0]) |
            (date[1] > today[1]) |
            (date[2] > today[2])
          )
            return 1;
          else if (
            (date[0] < today[0]) |
            (date[1] < today[1]) |
            (date[2] < today[2])
          )
            return -1;
          else return 0;
        };

        return todo.filter((item) => {
          if (
            filterSelectorState.DeadLine === "Overdue" &&
            compareDate(item.TodoDeadLine) === -1
          ) {
            return item;
          }
          if (
            filterSelectorState.DeadLine === "For Today" &&
            compareDate(item.TodoDeadLine) === 0
          ) {
            return item;
          }
          if (
            filterSelectorState.DeadLine === "For the Future" &&
            compareDate(item.TodoDeadLine) === 1
          ) {
            return item;
          }
        });
      }
    };
    if (filterCheck) return todo;
    else {
      return statusFilter(priorityFilter(deadLineFilter(todo)));
    }
  };



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
        <TodoItem data={filter(search())} />
      </tbody>
    </table>
  );
}

export default TodoTable;
