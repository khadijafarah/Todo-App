import ToDo from "./ToDo/ToDo"


const Overdue = () => {
  return (
    <>
     <div className="container nav-box py-5">
     <div className="nav-img ">
      <h2 className="text-center fs-1" style={{color:"white", paddingTop:"90px"}}>Todo App</h2>
     </div>
    </div>
    <ToDo></ToDo>
    </>
  )
}

export default Overdue