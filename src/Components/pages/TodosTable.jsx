import { useContext, useState } from "react";
import { ToDoCreateContext } from "./TodoContext";
import notAvail from "../../assets/Images/notavail.png";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodosTable = () => {
  const { todos, email, deleteTodo, editTodo } = useContext(ToDoCreateContext);
  const [taskName, setTaskName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null); // Track the id of the todo being edited

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (todo) => {
    // Populate the input fields with the current todo values
    setEditingTodoId(todo.id);
    setTaskName(todo.title);
    setDate(todo.date);
    setTime(todo.time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title: taskName,
      date: date,
      time: time,
      status: "pending",
    };
    // Call the editTodo function with updated values
    editTodo(editingTodoId, todo);
    
    // Clear input fields and reset editing state
    setTaskName("");
    setDate("");
    setTime("");
    setEditingTodoId(null);
    
    // Close the modal by manually triggering the close event
    const modalCloseBtn = document.querySelector(".btn-close");
    if (modalCloseBtn) {
      modalCloseBtn.click();
    }
  };

  return (
    <div className="container">
      <table className="table table-striped">
        {todos.length > 0 && (
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date & Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
        )}
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{todo.title}</td>
                <td>{email}</td>

                <td>
                  {todo.date} <br /> {todo.time}
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleEdit(todo)} // Pass the todo to handleEdit
                    >
                      <FaPenAlt />
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
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Edit ToDo
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
                              <div className="text-start my-5">
                                <label htmlFor="" className="mx-2">
                                  Pick a date:
                                </label>
                                <input
                                  type="date"
                                  name="date"
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                />
                              </div>
                              <div>
                                <label htmlFor="" className="mx-2">
                                  Pick your time:
                                </label>
                                <input
                                  type="time"
                                  name="time"
                                  value={time}
                                  onChange={(e) => setTime(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="submit" className="btn btn-primary">
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "1240px" }}
            >
              <img
                src={notAvail}
                alt=""
                className="d-flex align-items-center justify-content-center"
              />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodosTable;

