import styles from "./TodoForm.module.css";
import React from "react";

const TodoForm = () => {
  return (
    <React.Fragment>
      <div className={styles.formdiv}>
        <form action="">
          <label htmlFor="todo">Enter a todo.</label>
          <input type="text" id="todo" name="todo" />
          <div className={styles.buttondiv}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
