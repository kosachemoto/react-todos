import React from 'react';
import './Filter.css';
import Link from './../link/Link';

function Filter() {
  return (
    <div className="filter">
      <div className="filter__title">
        Filter
      </div>
      <div>
        <Link title="All" filter="SHOW_ALL" />
      </div>
      <div>
        <Link title="Completed" filter="SHOW_COMPLETED" />
      </div>
      <div>
        <Link title="Active" filter="SHOW_ACTIVE" />
      </div>
    </div>
  )
}

export default Filter;