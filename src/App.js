import React, { useState } from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [tasks, setTasks] = useState(defaultList);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const handleAddTask = (text) => {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: nextId++, text: text, done: false }]);
    }
  };

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className={isDarkMode ? "outer dark" : "outer"}>
      <div className='app'>
        <h1 className='display-1'>ToDo App</h1>

        <p className='mb-0 p-1'>Add a task here:</p>

        <div className='d-flex align-items-center justify-content-between'>
          <AddTask onAddTask={handleAddTask} />
          <DarkModeSwitch
            style={{ marginRight: "1rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={32}
          />
        </div>
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

let nextId = 5;
// list of items that will always be there on page load
const defaultList = [
  { id: 0, text: "get out of bed", done: true },
  { id: 1, text: "Espresso A.M.", done: true },
  { id: 2, text: "more espresso", done: false },
  { id: 3, text: "panic attack!!!", done: false },
  { id: 4, text: "back to bed", done: false },
];

export default App;
