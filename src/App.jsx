import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import TodoList from './components/todoList/TodoList';
import Filter from './components/filter/Filter';
import TodoListHOC from './containers/todoListHOC/TodoListHOC';
import AddTodo from './components/addTodo/AddTodo';
import AddTodoHOC from './containers/addTodoHOC/AddTodoHOC';
import FilterHOC from './containers/filterHOC/FilterHOC';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <AddTodoHOC />
        <TodoListHOC />
        <FilterHOC />
      </div>
    );
  }
}

export default App;
