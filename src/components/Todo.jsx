import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form, FormGroup, Input, Label, ButtonGroup } from "reactstrap";
import TodoLister from "./TodoLister";

function Todo() {
  const [todos, setTodos] = useState([]); // Hook to create a state
  const [status, setStatus] = useState("all");

  function handleSave(event) {
    event.preventDefault();
    const taskTitleEl = document.getElementById("taskTitle");
    const taskDescEl = document.getElementById("taskDescription");
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: taskTitleEl.value,
        description: taskDescEl.value,
        status: "inprogress",
      },
    ]);
    taskTitleEl.value = "";
    taskDescEl.value = "";
  }

  function handleUpdate(data = {}) {
    const filteredTodos = todos.filter((_t) => _t.id !== data.id);
    filteredTodos.push(data);
    setTodos(filteredTodos);
  }

  function handleDelete(id = 0) {
    let todosCopy = [...todos];
    todosCopy = todosCopy.filter((e) => e.id != id);
    console.log(todosCopy, todos);
    setTodos(todosCopy);
  }

  return (
    <>
      <Form className="mb-5">
        <FormGroup>
          <Label for="taskTitle">Task Title</Label>
          <Input
            id="taskTitle"
            name="title"
            placeholder="Enter Task title"
            type="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="taskDescription">Task Description</Label>
          <Input
            id="taskDescription"
            name="description"
            placeholder="Enter Task description"
            type="textarea"
          />
        </FormGroup>
        <Button type="submit" onClick={handleSave} color="primary">
          Create Task
        </Button>
      </Form>
      <div className="mb-5">
        <ButtonGroup>
          <Button
            color="primary"
            outline
            onClick={() => setStatus("all")}
            active={status === "all"}
          >
            All
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => setStatus("inprogress")}
            active={status === "inprogress"}
          >
            Pending
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => setStatus("completed")}
            active={status === "completed"}
          >
            Completed
          </Button>
        </ButtonGroup>
      </div>
      <TodoLister
        items={
          status === "all" ? todos : todos.filter((d) => d.status === status)
        }
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default Todo;
