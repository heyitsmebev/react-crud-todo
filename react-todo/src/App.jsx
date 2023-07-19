import { useState } from "react";
import "./App.css";

// custom components
import CustomForm from "./components/CustomForm";
import { TaskList } from "./components/TaskList";
import { EditForm } from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((task) =>
        //if the ids match, then toggle the checked status for that task
        //...task = the object of the task updated. take all the properities and toggle checked status
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  return (
    <>
      <div className="container">
        <header>
          <h1>My Task List</h1>
        </header>
        {isEditing && (
          <EditForm editedTask={editedTask} updateTask={updateTask} />
        )}
        <CustomForm addTask={addTask} />
        {tasks && (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        )}
      </div>
    </>
  );
}

export default App;
