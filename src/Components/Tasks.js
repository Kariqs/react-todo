import "./Tasks.css";
import { ReactComponent as DeleteSVG } from "./Images/delete.svg";

const Tasks = (props) => {
  return (
    <div className="task-holder">
      <p>{props.task}</p>
      <DeleteSVG className="delete-svg"/>
    </div>
  );
};

export default Tasks;
