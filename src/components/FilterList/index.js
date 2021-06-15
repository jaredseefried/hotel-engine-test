//Dependencies
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

//The 'Select Language' Dropdown Item Component is generated using react-bootstrap. This is intended to show all available languages in a dropdown list which comes from the RepoData state, rending dynamically using the .map method showing a Repository List. This is exported to /containers/RepoList/index.js"
function FilterList(props) {
  return (
    <Dropdown.Item onClick={props.filterLanguage} value={props.language} id={props.language} className="dropdown-item">{props.language}</Dropdown.Item>
  );
}

export default FilterList;