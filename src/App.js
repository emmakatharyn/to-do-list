import React, { useState } from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className='display-1'>ToDo App</h1>
      <p className='mb-0 p-1'>Add a task here:</p>
      <form className='d-flex gap-1 p-1 mb-1'>
        <input
          className='p-1'
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button variant='primary' onClick={handleAddTask}>
          Add Task
        </Button>
      </form>
      <ToDoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

function Task({ task, onDelete }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <span>{task}</span>
          <Button variant='danger' className='ms-auto' onClick={onDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const ToDoList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default App;
