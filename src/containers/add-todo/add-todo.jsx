import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import './add-todo.css';

export const keyDownHandler = (e, callback) => {
  if (e.keyCode === 13) {
    callback(e.target.value);
  }
}

const AddTodo = ({onAddTodo}) => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => { dispatch(addTodo(text)) }
  }
}

export const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo);