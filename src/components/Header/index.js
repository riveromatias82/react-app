import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';

function Header(props = {backOption: false}) {
  return (
    <Navbar className="center font-weight-bold" bg="dark" variant="dark">
      <Nav className="mr-auto">
        {props.backOption && 
        <Nav.Link href="/">{"<"} Back</Nav.Link>}
        <Nav.Link href="">Person</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;