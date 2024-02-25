import "./Todo.css";
import { ReactComponent as TodoSVG } from "./Images/todo.svg";

const Todo = () => {
  return (
    <div className="todo-container">
      <TodoSVG className="svg-container" />
      <div className="text-container">
        <h1>TODO LIST</h1>
        <p>Create your list.</p>
      </div>
    </div>
  );
};

export default Todo;
