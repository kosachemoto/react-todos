import React, { useEffect } from 'react';
import Todo from './../todo/Todo';
// import TodoHOC from './../../containers/todoHOC/TodoHOC';

function TodoList({todos, toggleTodo}) {
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={todo.id} data={todo} onClick={() => {toggleTodo(todo.id)}} />
        // return <TodoHOC key={todo.id}  />
      })}
    </> 
  )
}

export default TodoList;