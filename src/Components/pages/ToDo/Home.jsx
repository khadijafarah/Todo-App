
import { useContext } from "react";
import TodosTable from "../TodosTable";
import ToDo from "./ToDo";
import { ToDoCreateContext } from "../TodoContext";

const Home = () => {
  const {todos} = useContext(ToDoCreateContext)
  return (
   <>
    <div className="container nav-box py-5">
     <div className="nav-img ">
      <h2 className="text-center fs-1" style={{color:"white", paddingTop:"90px"}}>Todo App</h2>
     </div>
    </div>
    <ToDo></ToDo>
    <TodosTable todos={todos}></TodosTable>
   </>
  )
}

export default Home;