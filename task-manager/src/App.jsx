import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <p>Total sarcini: {tasks.length}</p>
      <p>Finalizate: {completedTasks}</p>

      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p>Nu există sarcini momentan.</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;