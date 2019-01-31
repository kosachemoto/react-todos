import React, { useEffect } from 'react';
import Todo from './../todo/Todo';

function TodoList({data}) {
  return (
    <>
      {data.map((todo, index) => {
        return <Todo key={index} data={todo} />
      })}
    </> 
  )
}

export default TodoList;