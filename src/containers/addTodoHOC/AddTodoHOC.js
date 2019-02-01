import { connect } from 'react-redux';
import { addTodo } from './../../actions';
import AddTodo from './../../components/addTodo/AddTodo';

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => { console.log("add todo"); dispatch(addTodo(text)) }
  }
}

const AddTodoHOC = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default AddTodoHOC;