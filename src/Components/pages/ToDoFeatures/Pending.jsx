import { useContext, useEffect, useState } from "react";
// import ToDo from "./ToDo/ToDo";
import dayjs from "dayjs";

import ToDo from "../ToDo/ToDo";
import { ToDoCreateContext } from "../TodoContext";
import TodosTable from "../TodosTable";

const Pending = () => {
  const { todos } = useContext(ToDoCreateContext);
  const [pendingTodo, setPendingTodo] = useState([]);
  const today = dayjs().startOf("day"); // Start of today in local time

  useEffect(() => {
    setPendingTodo(
      todos.filter((todo) => {
        const todoDate = dayjs(todo.date).startOf("day");
        // Check if todoDate is after today
        return todoDate.isAfter(today) && todo.status === "pending";
      })
    );
  }, [todos]);

  console.log(pendingTodo);
  return (
    <>
      <div className="container nav-box py-5">
        <div className="nav-img ">
          <h2
            className="text-center fs-1"
            style={{ color: "white", paddingTop: "90px" }}
          >
            Todo App
          </h2>
        </div>
      </div>
      <ToDo></ToDo>
      <TodosTable todos={pendingTodo}></TodosTable>
    </>
  );
};

export default Pending;
