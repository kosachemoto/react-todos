import { connect } from 'react-redux';
import TodoList from '../../components/todoList/TodoList';
import { toggleTodo } from '../../actions';

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

const TodoListHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListHOC;