import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import todoApp from './reducers';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import TodoList from './todoList/TodoList';
import Filter from './filter/Filter';

let store = createStore(todoApp);

const mockTodos = [
  {
    text: "First task",
    completed: true
  },
  {
    text: "Second task",
    completed: true
  },
  {
    text: "Third task",
    completed: false
  }
]

class App extends Component {
  componentDidMount() {
    console.log("Component did mount");
    console.log("Initial store state:", store.getState());
    
    let unsubscribe = store.subscribe(() => {
      console.log("Store state was updated:", store.getState());
    });

    store.dispatch(addTodo("First task"));
    store.dispatch(addTodo("Second task"));
    store.dispatch(addTodo("Third task"));
    
    store.dispatch(toggleTodo(0));

    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  }

  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <TodoList data={mockTodos} />
        <Filter />
      </div>
    );
  }
}

export default App;
