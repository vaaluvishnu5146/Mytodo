import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function EditTodoModal({
  isOpen = false,
  toggle = () => {},
  data = {},
  handleChange = () => {},
  onUpdate = () => {},
}) {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form className="mb-5">
            <FormGroup>
              <Label for="taskTitle">Task Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter Task title"
                type="title"
                value={data.title}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="taskDescription">Task Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Enter Task description"
                type="textarea"
                value={data.description}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="completed"
                name="status"
                type="radio"
                onChange={handleChange}
                checked={data.status === "completed"}
              />{" "}
              <Label>Completed</Label>
            </FormGroup>
            <FormGroup>
              <Input
                id="inprogress"
                name="status"
                type="radio"
                onChange={handleChange}
                checked={data.status === "inprogress"}
              />{" "}
              <Label>In Progress</Label>
            </FormGroup>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onUpdate(data);
                toggle();
              }}
              color="primary"
            >
              Update Task
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

EditTodoModal.propTypes = {
  isOpen: Boolean,
  toggle: Function,
  data: Array,
  handleChange: Function,
  onUpdate: Function,
};

export default EditTodoModal;
