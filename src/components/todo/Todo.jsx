import React from 'react';
import './Todo.css';

function Todo({data}) {

  const message = data.text;
  const status = data.completed ? "COMPLETED" : "UNCOMPLETED";

  return (
    <div className={"todo " + (data.completed ? "todo_completed" : "todo_uncompleted")}>
      <div>
        {message}
      </div>
      <div className="todo__status">
        #{status}
      </div>
    </div>
  )
}

export default Todo;