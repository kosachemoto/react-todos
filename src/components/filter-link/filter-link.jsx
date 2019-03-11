import React from 'react';
import { NavLink } from 'react-router-dom';
import './filter-link.css';

export const FilterLink = ({ filter, path, title, onClick }) => {
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