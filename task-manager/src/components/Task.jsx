function Task({ task, completeTask, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(task.id)}
      />

      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Șterge
      </button>
    </div>
  );
}

export default Task;