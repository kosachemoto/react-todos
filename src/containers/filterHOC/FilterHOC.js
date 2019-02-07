import { connect } from 'react-redux';
import Filter from './../../components/filter/Filter';
import { setVisibilityFilter, VisibilityFilters } from './../../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))}
  }
}

const FilterHOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterHOC;