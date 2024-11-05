
import TodosTable from "../TodosTable";
import ToDo from "./ToDo";

const Home = () => {
  return (
   <>
    <div className="container nav-box py-5">
     <div className="nav-img ">
      <h2 className="text-center fs-1" style={{color:"white", paddingTop:"90px"}}>Todo App</h2>
     </div>
    </div>
    <ToDo></ToDo>
    <TodosTable></TodosTable>
   </>
  )
}

export default Home;