import React, { useState } from 'react';
import './AddTodo.css';

const keyDownHandler = (e, callback) => {
  if (e.keyCode === 13) {
    callback(e.target.value);
  }
}

function AddTodo({onAddTodo}) {
  const [value, setValue] = useState("");

  return (
    <div className="add-todo">
      <input 
        type="text" 
        className="add-todo__input" 
        onKeyDown={e => keyDownHandler(e, onAddTodo)} 
      />
    </div>
  )
}

export default AddTodo;