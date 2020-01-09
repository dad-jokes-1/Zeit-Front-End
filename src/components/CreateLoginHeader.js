import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

function CreateLoginHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
  
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Dad Jokes BW</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to={"login"}>Login</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  
  );
}

export default CreateLoginHeader;