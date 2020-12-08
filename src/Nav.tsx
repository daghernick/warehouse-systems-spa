import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Home.css';

const Navigation: React.FC =() => {
  return (
<Navbar>
            <Navbar>
              <Navbar.Brand>
                <a href="#home">My Brand</a>
              </Navbar.Brand>
            </Navbar>
            <Nav>
              <NavItem >
                Home
              </NavItem>
              <NavItem>
                About
              </NavItem>
              <NavItem>
                FAQ
              </NavItem>
              <NavItem >
                Contact Us
              </NavItem>
            </Nav>
          </Navbar> 
  );
}

export default Navigation;
