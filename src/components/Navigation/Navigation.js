import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'

function Navigation() {

  const [search, setSearch] = useState({
    searchTerms: ""
  })
  const [error, setError] = useState("");

  useEffect(() => {

  })


  const handleInputChange = e => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    searchRepos()
  };

  const searchRepos = () => {
    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearch({
          searchTerms: res.data
        });
      })
      .catch(err => setError(err));
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Github Repo Search</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Control
          type="search"
          placeholder="Search"
          className="mr-sm-2"
          name='searchTerms'
          value={search.searchTerms}
          onChange={handleInputChange} />
        <Button
          onSubmit={handleFormSubmit}
          variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;