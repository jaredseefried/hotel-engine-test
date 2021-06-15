//Dependencies
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//Functional Component - Navigation Bar with Search Input Field
//The search works on Search Button Click
function Navigation(props) {

  return (
    <Navbar bg="primary" expand='md' variant="dark">
      <Navbar.Brand sm={6} href="/">Github Repo Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav sm={6} className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
        <Form sm={6} inline>
          {/* React Bootstrap Input Search Form which alls props */}
          <Form.Control
            type="text"
            placeholder="Search"
            className="mr-sm-2 form-control"
            name="search"
            value={props.search}
            onChange={props.handleInputChange}
            onKeyPress={props.onEnter}
          />
          <Button sm={6}
            onClick={props.onClick}
            variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;