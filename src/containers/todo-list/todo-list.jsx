import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import { Todo } from '../../components';

const TodoList = ({todos, toggleTodo, filter}) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={todo.id} data={todo} onClick={() => {toggleTodo(todo.id)}} />
        // return <TodoHOC key={todo.id}  />
      })}
    </> 
  )
}

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'completed':
    return todos.filter(todo => todo.completed)
    case 'active':
    return todos.filter(todo => !todo.completed)
    case 'all':
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (index) => {dispatch(toggleTodo(index))}
  }
}

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);