import "./TodoForm.css";
import { ReactComponent as AddTodoSVG } from "./Images/addTodo.svg";
import { useState } from "react";

const TodoForm = (props) => {
  let inputValue;
  let [task, setTask] = useState("");

  const inputChange = (event) => {
    inputValue = event.target.value;
    setTask(inputValue);
  };

  const addTodo = () => {
    props.onAddTask(task);
    setTask("");
  };

  return (
    <div className="form-container">
      <form className="todo-form">
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
