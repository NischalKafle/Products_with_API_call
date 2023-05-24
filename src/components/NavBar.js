import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';


import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartProduct=useSelector(state=>state.cart)
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to='/' as={Link}>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/product' as={Link}>Product</Nav.Link>
            
          </Nav>
          <Nav.Link to='/cart' as={Link}>
          <FontAwesomeIcon icon={faShoppingCart} /> : {cartProduct.length}
          </Nav.Link>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;