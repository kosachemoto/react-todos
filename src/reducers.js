import { combineReducers } from 'redux';
import { 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
 } from "./actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = initialState.todos, action) {
switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ];
    break;
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      });
    break;
    default: 
      return state;
  }
}

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: 
      return action.filter
    break;
    default: 
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;