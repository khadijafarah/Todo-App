import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ToDoCreateContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(existingTodos);
  }, []);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

 
const addTodo = (todo) => {
  let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
  if (!Array.isArray(existingTodos)) {
    existingTodos = [];
  }
  existingTodos.push(todo);
  setTodos(existingTodos);
  localStorage.setItem("todos", JSON.stringify(existingTodos));
  toast.success('Successfully added!');
};

     
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const tokenStr = token.split(" ")[1];
      const decoded = jwtDecode(tokenStr);
      setEmail(decoded.email);
    }
  }, [email]);
  const deleteTodo = (id) => {
    console.log(id);

    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setTodos(updatedTodos);
  };
   
  const editTodo = (id, updatedFields) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedFields } : todo
    );
    setTodos(updatedTodos); 
  };

  const contextValue = { todos, email, deleteTodo, addTodo, editTodo};



  return (
    <ToDoCreateContext.Provider value={contextValue}>
      {children}
    </ToDoCreateContext.Provider>
  );
};

export default TodoContext;
