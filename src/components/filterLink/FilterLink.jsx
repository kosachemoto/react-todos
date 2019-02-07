import React from 'react';
import './FilterLink.css';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, title, onClick }) => (
  <NavLink
    to={filter === 'SHOW_ALL' ? '' : filter}
    onClick={onClick}
    className="filter-link"
    activeStyle={{
      color: "green"
    }}
  >
    {title}
  </NavLink>
);

export default FilterLink;