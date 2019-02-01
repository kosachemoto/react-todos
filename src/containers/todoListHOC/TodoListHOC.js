import { connect } from 'react-redux';
import TodoList from '../../components/todoList/TodoList';
import { toggleTodo } from '../../actions';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
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