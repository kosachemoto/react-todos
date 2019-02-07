import React from 'react';
import './App.css';
import TodoListHOC from './containers/todoListHOC/TodoListHOC';
import AddTodoHOC from './containers/addTodoHOC/AddTodoHOC';
import FilterHOC from './containers/filterHOC/FilterHOC';

const App = (props) => {
  return (
    <div className="App">
      <h1>Todos:</h1>
      <FilterHOC />
      <AddTodoHOC />
      <TodoListHOC 
        filter={ props.match.params.filter || "SHOW_ALL" }
      />
    </div>
  );
}

export default App;
