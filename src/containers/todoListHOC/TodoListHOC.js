import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import TodoList from '../../components/todoList/TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      console.log("todo click id:", id);
      dispatch(toggleTodo(id))
    }
  }
}

const TodoListHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListHOC;