import styles from "./TodoForm.module.css";
import React from "react";

const TodoForm = () => {
  return (
    <React.Fragment>
      <div className={styles.formdiv}>
        <form action="">
          <h3>Create a Todo</h3>
          <label htmlFor="todo">Enter todo title</label>
          <input type="text" id="todo" name="todo" />
          <label htmlFor="desc">Describe the todo</label>
          <textarea name="" id="desc" cols="30" rows="10"></textarea>
          <div className={styles.buttondiv}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
