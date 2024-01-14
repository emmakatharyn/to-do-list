import React, { useState } from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(defaultList);

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
    <div className='app'>
      <h1 className='display-1'>ToDo App</h1>
      <p className='mb-0 p-1'>Add a task here:</p>

      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

let nextId = 3;
// list of items that will always be there on page load
const defaultList = [
  { id: 0, text: "Take A.M. Meds", done: true },
  { id: 1, text: "Espresso A.M.", done: true },
  { id: 2, text: "Wash dishes", done: false },
];

export default App;
