import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]); // Hook to create a state

  function handleSave(event) {
    event.stopPropagation();
    const inputEl = document.getElementById("task");
    setTodos([...todos, inputEl.value]);
    inputEl.value = "";
  }

  return (
    <>
      <h1>Lets build Todo App</h1>
      <div>
        <label htmlFor="task">Task</label>
        <input id="task" />
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
