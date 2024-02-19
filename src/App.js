import "./App.css";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Tasks from "./Components/Tasks";
import { useState } from "react";

let INITIAL_TASKS = [
  "Cook ugali.",
  "Eat Ugali.",
  "Wash utensils.",
  "Finish up my app and try get up with the new technology. ",
  "A to-do list might include tasks like Buy groceries, finish report, and schedule dentist appointment, serving as a reminder and organizational tool for daily responsibilities.",
];
function App() {
  let [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div className="App">
      <Todo />
      <TodoForm onAddTask={addTask} />
      {tasks.map((task) => (
        <Tasks key={Math.random()} task={task} />
      ))}
    </div>
  );
}

export default App;
