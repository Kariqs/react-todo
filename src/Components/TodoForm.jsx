import "./TodoForm.css";
import { ReactComponent as AddTodoSVG } from "./Images/addTodo.svg";
import { useState } from "react";

const TodoForm = (props) => {
  let inputValue;
  const [task, setTask] = useState("");
  const [inputIsValid, setInputIsValid] = useState(true);

  const inputChange = (event) => {
    inputValue = event.target.value;
    if (inputValue.trim().length > 0) {
      setInputIsValid(true);
    }
    setTask(inputValue);
  };

  const addTodo = () => {
    if (task.toString().trim() === "") {
      setInputIsValid(false);
      return;
    }
    props.onAddTask(task);
    setTask("");
  };

  return (
    <div className="form-container">
      <form className={`todo-form ${!inputIsValid ? "invalid" : ""}`}>
        <input
          placeholder="Enter your task."
          value={task}
          required
          onChange={inputChange}
        />
        <AddTodoSVG type="button" className="add-todo" onClick={addTodo} />
      </form>
    </div>
  );
};
export default TodoForm;
