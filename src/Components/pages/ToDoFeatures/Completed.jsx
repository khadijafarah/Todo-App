import { useContext, useEffect, useState } from "react"


import ToDo from "../ToDo/ToDo"
import { ToDoCreateContext } from "../TodoContext"
import TodosTable from "../TodosTable"


const Completed = () => {
  const {todos} = useContext(ToDoCreateContext)
  const [completedTodo, setcompletedTodo] = useState([])

  useEffect(()=> {
    setcompletedTodo(todos.filter((todo) => todo.status === 'completed'))
  }, [todos])

console.log(completedTodo);

  return (
   <>
    <div className="container nav-box py-5">
     <div className="nav-img ">
      <h2 className="text-center fs-1" style={{color:"white", paddingTop:"90px"}}>Todo App</h2>
     </div>
    </div>
    <ToDo></ToDo>
    <TodosTable todos={completedTodo}></TodosTable>
   </>
  )
}

export default Completed