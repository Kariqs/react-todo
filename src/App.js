import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import TodoForm from "./components/TodoForm";
import TodoHolder from "./components/TodoHolder";

function App() {
  const [showForm, setShowForm] = useState(false);
  //logic for showing form
  const showTodoForm = (value) => {
    setShowForm(value);
  };
  return (
    <React.Fragment>
      <div className="main">
        <Header />
        {!showForm && <Description onShowForm={showTodoForm} />}
        {showForm && <TodoForm />}
        <TodoHolder />
      </div>
    </React.Fragment>
  );
}

export default App;
