import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function TaskInput({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <form className='d-flex gap-2 p-1 mb-1'>
        <input
          placeholder='Add task'
          className='p-1'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          className='px-3'
          variant='primary'
          onClick={() => {
            setText("");
            onAddTask(text);
          }}
        >
          Add Task
        </Button>
      </form>
    </>
  );
}
