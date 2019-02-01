import React from 'react';
import './Filter.css';
import Link from './../link/Link';
import { VisibilityFilters } from './../../actions.js';

function Filter({setVisibilityFilter}) {
  return (
    <div className="filter">
      <div className="filter__title">
        Filter
      </div>
      {VisibilityFilters.map(filter => {
        return (
          <Link 
          key={filter.id} 
          title={filter.title} 
          filter={filter.name}
          onClick={() => {setVisibilityFilter(filter.name)}} />
        )})}
    </div>
  )
}

export default Filter;