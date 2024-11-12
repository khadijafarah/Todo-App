import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import ToDo from "../ToDo/ToDo";


import { ToDoCreateContext } from "../TodoContext";
import TodosTable from "../TodosTable";


const Today = () => {
  const { todos } = useContext(ToDoCreateContext);
  const [todayTodo, setTodayTodo] = useState([]);
  const today = dayjs().startOf("day"); // Start of today in local time

  useEffect(() => {
    setTodayTodo(
      todos.filter((todo) => {
        const todoDate = dayjs(todo.date).startOf("day");
        return todoDate.isSame(today) && todo.status === "pending";
      })
    );
  }, [todos]);

  console.log(todayTodo);

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
      <TodosTable todos={todayTodo}></TodosTable>
    </>
  );
};

export default Today;



