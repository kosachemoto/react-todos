import React, { useEffect } from 'react';
import Todo from './../todo/Todo';

function TodoList({todos, onTodoClick}) {
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={index} data={todo} onClick={(e) => { onTodoClick() }} />
      })}
    </> 
  )
}

export default TodoList;