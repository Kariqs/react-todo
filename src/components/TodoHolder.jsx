import React from "react";
import styles from "./TodoHolder.module.css";

const TodoHolder = (props) => {
  return (
    <React.Fragment>
      <div className={styles.tododiv}>
        <p>{props.todo.todo}</p>
        <button>Delete</button>
      </div>
    </React.Fragment>
  );
};

export default TodoHolder;
