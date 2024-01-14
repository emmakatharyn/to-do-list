import { useState } from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className='my-3'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChange={onChangeTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <div className='task-content'>
        <input
          value={task.text}
          onChange={(e) => onChange({ ...task, text: e.target.value })}
        />
        <div className='btns-box'>
          <button onClick={() => setIsEditing(false)}>Save</button>
          <button onClick={() => onDelete(task.id)}>
            <ion-icon size='large' name='close'></ion-icon>
          </button>
        </div>
      </div>
    );
  } else {
    taskContent = (
      <div className='task-content'>
        {task.text}
        <div className='btns-box'>
          <button className='edit-icon' onClick={() => setIsEditing(true)}>
            <ion-icon name='create-outline'></ion-icon>
          </button>
          <button onClick={() => onDelete(task.id)}>
            <ion-icon size='large' name='close'></ion-icon>
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Card>
        <Card.Body>
          <label className='d-flex gap-3 align-items-center'>
            <input
              type='checkbox'
              checked={task.done}
              onChange={(e) => {
                onChange({
                  ...task,
                  done: e.target.checked,
                });
              }}
            />
            <span className='d-flex align-items-center gap-4'>
              {taskContent}
            </span>
          </label>
          {/* <button onClick={() => onDelete(task.id)}>
            <ion-icon size='large' name='close'></ion-icon>
          </button> */}
        </Card.Body>
      </Card>
    </>
  );
}
