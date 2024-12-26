import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../css/Navbar.module.css';
function NavbarS() {
  return (
    <>
      <Navbar expand="lg" className={styles.navBar}>
        <Container>
          <Navbar.Brand href="#" className='navbar'>Gold Bar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="">Home</Nav.Link>
              <Nav.Link href="#action2" className="">Golde Price</Nav.Link>
              <Nav.Link href="#" className="" > Blog</Nav.Link>
              <Nav.Link href="#" className="" > About us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarS;
