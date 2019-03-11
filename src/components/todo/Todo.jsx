import React from 'react';
import './todo.css';

export const Todo = ({data, onClick}) => {

  const message = data.text;
  const status = data.completed ? "COMPLETED" : "UNCOMPLETED";

  return (
    <div 
      className={"todo " + (data.completed ? "todo_completed" : "todo_uncompleted")}
      onClick={onClick}>
      <div>
        {message}
      </div>
      <div className="todo__status">
        #{status}
      </div>
    </div>
  )
}