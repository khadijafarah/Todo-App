import { useContext, useState } from "react";
// import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { ToDoCreateContext } from "../TodoContext";

const ToDo = () => {
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { addTodo } = useContext(ToDoCreateContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const todo = {
  //       title: taskName,
  //       date: date,
  //       time: time,
  //       status: "pending"
  //   }
  //   let existingTodos;
  //   try {
  //     existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //     if (!Array.isArray(existingTodos)) {
  //       existingTodos = []; // Ensure it's an array
  //     }
  //   } catch (error) {
  //     existingTodos = []; // Default to an empty array if JSON parsing fails
  //   }

  //   console.log(todo);
  //   const todosString = JSON.stringify(todo);
  //   existingTodos.push(todosString);
  //   localStorage.setItem('todos', existingTodos );
  //   toast.success('Successfully added!')

  //  console.log(existingTodos);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: taskName,
      date: date,
      time: time,
      status: "pending",
    };

    addTodo(todo);

    setTaskName("");
    setDate("");
    setTime("");

    // Retrieve existing todos from local storage or initialize as an empty array
    // let existingTodos;

    //   existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
    //   if (!Array.isArray(existingTodos)) {
    //     existingTodos = []; // Ensure it's an array

    // }

    // // Add the new todo directly to the existing todos array
    // existingTodos.push(todo);

    // // Save the updated todos array back to local storage as a string
    // // localStorage.setItem('todos', JSON.stringify(existingTodos));

    // // Notify the user
    // toast.success('Successfully added!');
  };

  return (
    <div className="container">
      <div className="btn-section">
        <div className="buttons d-flex gap-2">
          {/* <button className="todo-btn">< style={{textDecoration:"none"}}>Today</></button>
        <button className="todo-btn"><Link style={{textDecoration:"none"}}>Pending</Link></button>
        <button className="todo-btn"><Link style={{textDecoration:"none"}}>Overdue</Link></button>
        <button className="todo-btn"><Link style={{textDecoration:"none"}}>Completed</Link></button> */}
          <NavLink
            to="/today"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "todo-btn active"
                : "todo-btn inactive"
            }
          >
            Today
          </NavLink>

          <NavLink
            to="/pending"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "todo-btn active"
                : "todo-btn inactive"
            }
          >
            Pending
          </NavLink>

          <NavLink
            to="/overdue"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "todo-btn active"
                : "todo-btn inactive"
            }
          >
            Overdue
          </NavLink>

          <NavLink
            to="/completed"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "todo-btn active"
                : "todo-btn inactive"
            }
          >
            Completed
          </NavLink>
        </div>
      </div>
      <div className="tasks-section d-flex justify-content-between my-4">
        <div>
          <h4>Tasks</h4>
        </div>
        <div>
          {/* <button className="addtask-btn">Add Task</button> */}

          {/* Button trigger modal */}
          <button
            type="button"
            className="addtask-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Task
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add ToDo
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <label htmlFor="" className="mx-2">
                        {" "}
                        Task Name:
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="title"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                      />
                    </div>
                    <div className=" text-start my-5">
                      <label htmlFor="" className="mx-2">
                        {" "}
                        Pick a date:
                      </label>
                      <input
                        type="date"
                        placeholder="name"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="mx-2">
                        {" "}
                        Pick your time:
                      </label>
                      <input
                        type="time"
                        placeholder="name"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn btn-primary"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
