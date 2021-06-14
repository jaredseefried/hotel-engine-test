import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Navigation(props) {

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Github Repo Search</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Control
          type="text"
          placeholder="Search"
          className="mr-sm-2 form-control"
          name="search"
          value={props.search}
          onChange={props.handleInputChange}
          onKeyPress={props.onEnter}
        />
        <Button
          onClick={props.onClick}
          variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;