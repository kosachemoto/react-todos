import React from 'react';
import { 
  TodoListContainer, 
  AddTodoContainer,
  FilterContainer
} from '../../containers';
import './app.css';

export const App = (props) => {
  return (
    <div className="App">
      <h1>Todos:</h1>
      <FilterContainer />
      <AddTodoContainer />
      <TodoListContainer 
        filter={ props.match.params.path || "SHOW_ALL" }
      />
    </div>
  );
}