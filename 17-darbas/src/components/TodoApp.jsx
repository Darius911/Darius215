
import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt("Enter a new task:");
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);

    setTasks(updatedTasks);
  };

  // Spausdiname, kiekviena karta ivykus render - del state pakitimo
  console.log(tasks);

  return (
    <>
    <h2>Task tracker</h2>
    
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button onClick={() => toggleComplete(index)}>
            {task.completed ? "Undo" : "Done"}
          </button>
        </li>
      ))}

      <button onClick={() => (addTask())}>Add a task</button>
    </ul>
    {tasks.length === 0 && <p>No tasks yet</p>}
    </>
  );
}
