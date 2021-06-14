import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

function FilterList(props) {
  return (
    <Dropdown.Item onClick={props.filterLanguage} value={props.language} id={props.language} className="dropdown-item">{props.language}</Dropdown.Item>
  );
}

export default FilterList;