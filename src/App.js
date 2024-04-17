import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import TodoForm from "./components/TodoForm";
import TodoHolder from "./components/TodoHolder";

const TODOS = [];

function App() {
  const [todos, setTodos] = useState(TODOS);

  const [showForm, setShowForm] = useState(false);
  //upstating
  const getTodo = (todo) => {
    setTodos((prevTODOS) => {
      return [...prevTODOS, todo];
    });
    console.log(todos);
  };
  //logic for showing form
  const showTodoForm = (value) => {
    setShowForm(value);
  };
  return (
    <React.Fragment>
      <div className="main">
        <Header />
        {!showForm && <Description onShowForm={showTodoForm} />}
        {showForm && <TodoForm onGetTodo={getTodo} />}
        {todos.map((todo)=>(<TodoHolder todo = {todo} />))}
      </div>
    </React.Fragment>
  );
}

export default App;
