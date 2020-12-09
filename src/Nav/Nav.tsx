import React, { Component } from 'react'; 
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Nav.css';

const Navigation: React.FC =() => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav">
          <Nav.Link className="navItem" href="/">HOME</Nav.Link>
          <img className="navItemImg" src="icon-1.png"/>
          <Nav.Link className="navItem" href="/events">EVENTS</Nav.Link>
          <img className="navItemImg" src="icon-2.png"/>
          <Nav.Link className="navItem" href="/merch">MERCH</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
