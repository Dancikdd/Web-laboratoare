import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (taskName.trim() === "") {
      return;
    }

    addTask(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introdu denumirea sarcinii"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />

      <button type="submit">Adaugă</button>
    </form>
  );
}

export default TaskForm;