import React from 'react';
import { Container } from 'react-bootstrap';
import FilterList from '../FilterList';


function FilterContainer(props) {
  return (
    <Container className='language-dropdown'>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        Select Language</button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <FilterList
          language={props.language}
        />
      </ul>
    </Container>
  );
}

export default FilterContainer;