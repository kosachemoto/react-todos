import React from 'react';
import './FilterLink.css';
import { Link } from 'react-router-dom';

const FilterLink = ({ filter, title, onClick }) => (
  <Link
    to={filter === 'SHOW_ALL' ? '' : filter}
    activeStyle={{
      color: "blue"
    }}
  >
    <div
      className="filter-link"
      onClick={onClick}>
      {title}
    </div>
  </Link>
);

export default FilterLink;