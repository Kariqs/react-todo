import "./Tasks.css";
import { ReactComponent as DeleteSVG } from "./Images/delete.svg";
import { useState } from "react";

const Tasks = (props) => {
  const [showTask, setShowTask] = useState(true);
  const onDelete = () => {
  
    setShowTask(false);
  };
  return (
    <div className="task-holder">
      <p>{props.task}</p>
      <DeleteSVG className="delete-svg" onClick={onDelete} />
    </div>
  );
};

export default Tasks;
