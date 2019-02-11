import React from 'react';
import './FilterLink.css';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, path, title, onClick }) => {
  return (
    <NavLink
      to={`${process.env.PUBLIC_URL}/${path}`}
      onClick={onClick}
      className="filter-link"
      activeClassName="filter-link_active"
    >
      {title}
    </NavLink>
  );
}

export default FilterLink;