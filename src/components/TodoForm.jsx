import styles from "./TodoForm.module.css";
import React from "react";

const TodoForm = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (input, value) => {
    console.log([input] + ":" + value);
  };
  return (
    <React.Fragment>
      <div className={styles.formdiv}>
        <form onSubmit={submitFormHandler} action="">
          <h3>Create a Todo</h3>
          <label htmlFor="todo">Enter todo title</label>
          <input
            onChange={(event) => {
              inputChangeHandler("todo", event.target.value);
            }}
            type="text"
            id="todo"
            name="todo"
          />
          <label htmlFor="desc">Describe the todo</label>
          <textarea
            onChange={(event) => {
              inputChangeHandler("desc", event.target.value);
            }}
            name=""
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.buttondiv}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
