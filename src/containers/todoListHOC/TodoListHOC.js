import { connect } from 'react-redux';
import TodoList from '../../components/todoList/TodoList';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
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