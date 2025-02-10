import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import EditTodoModal from "./EditTodoModal";

export default function TodoLister({
  items = [],
  onDelete = () => {},
  onUpdate = () => {},
}) {
  const [isOpen, setOpen] = useState(false);
  const [matchingTodo, setMatchingTodo] = useState({});

  function toggle(id = "") {
    setOpen(!isOpen);
    const matchingTask = items.find((item) => item.id === id);
    setMatchingTodo(matchingTask);
  }

  function handleInputChange(e) {
    let matchingTodoCopy = {
      ...matchingTodo,
    };
    if (e.target.type === "radio") {
      matchingTodoCopy[e.target.name] = e.target.id;
    } else {
      matchingTodoCopy[e.target.id] = e.target.value;
    }

    setMatchingTodo(matchingTodoCopy);
  }

  return (
    <div>
      {items.length > 0 ? (
        items.map((_item, _index) => (
          <ListGroup key={_index}>
            <ListGroupItem className="d-flex justify-content-between">
              <p>{_item.title}</p>
              <div className="d-flex">
                <Button color="warning me-2" onClick={() => toggle(_item.id)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => onDelete(_item.id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        ))
      ) : (
        <p>No Tasks Found</p>
      )}
      <EditTodoModal
        isOpen={isOpen}
        toggle={toggle}
        data={matchingTodo}
        handleChange={handleInputChange}
        onUpdate={onUpdate}
      />
    </div>
  );
}

TodoLister.propTypes = {
  items: Array,
  onDelete: Function,
  onUpdate: Function,
};
