import React from 'react';

function FilterList(props) {
  return (
    <li className="dropdown-item">{props.language}</li>
  );
}

export default FilterList;