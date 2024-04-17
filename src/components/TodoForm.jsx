import styles from "./TodoForm.module.css";
import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState({ todo: ""});
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onGetTodo(todo);
  };

  const inputChangeHandler = (input, value) => {
    setTodo((prevTodos) => {
      return { ...prevTodos, [input]: value };
    });
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
          <div className={styles.buttondiv}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default TodoForm;
