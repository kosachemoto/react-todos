import React from 'react';
import { connect } from 'react-redux';
import { 
  VisibilityFilters, 
  setVisibilityFilter
} from '../../actions.js';
import { FilterLink } from '../../components';
import './filter.css';

const Filter = ({setVisibilityFilter}) => {
  return (
    <div className="filter">
      <div className="filter__title">
        Filter
      </div>
      {VisibilityFilters.map(filter => {
        return (
          <FilterLink
          key={filter.id} 
          title={filter.title} 
          filter={filter.name}
          path={filter.path}
          onClick={() => {setVisibilityFilter(filter.name)}} />
        )})}
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))}
  }
}

export const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);