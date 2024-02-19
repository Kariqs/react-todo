import "./App.css";
import { ReactComponent as ClipboardSVG } from "./Components/Images/clipboard.svg";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm";
import Tasks from "./Components/Tasks";
import { useState } from "react";

let INITIAL_TASKS = [
  // "Cook ugali.",
  // "Eat Ugali.",
  // "Wash utensils.",
  // "Finish up my app and try get up with the new technology. ",
  // "A to-do list might include tasks like Buy groceries, finish report, and schedule dentist appointment, serving as a reminder and organizational tool for daily responsibilities.",
];
function App() {
  let [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  let taskContainer = (
    <div className="svg-div">
      <ClipboardSVG className="clip-svg" />
    </div>
  );
  if (tasks.length > 0) {
    taskContainer = tasks.map((task) => (
      <Tasks key={Math.random()} task={task} />
    ));
  }

  return (
    <div className="App">
      <Todo />
      <TodoForm onAddTask={addTask} />
      {taskContainer}
    </div>
  );
}

export default App;
