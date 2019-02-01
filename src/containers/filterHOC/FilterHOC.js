import { connect } from 'react-redux';
import Filter from './../../components/filter/Filter';
import { setVisibilityFilter, VisibilityFilters } from './../../actions';

const mapStateToProps = (state) => {
  return {
    filters: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => {
      console.log("filter:", filter);
      dispatch(setVisibilityFilter(filter))}
  }
}

const FilterHOC = connect(
  null,
  mapDispatchToProps
)(Filter);

export default FilterHOC;