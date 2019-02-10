import React from 'react';
import './Filter.css';
import FilterLink from './../filterLink/FilterLink';
import { VisibilityFilters } from './../../actions.js';

function Filter({setVisibilityFilter}) {
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

export default Filter;