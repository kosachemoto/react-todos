import React from 'react';
import './Link.css';

function Link({title, onClick}) {
  return (
    <div 
      className="link"
      onClick={onClick}>
      {title}
    </div>
  )
}

export default Link;