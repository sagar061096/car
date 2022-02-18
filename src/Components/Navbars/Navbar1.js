import React from 'react';
import {Container,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navbar1() {
  return (
      <>
     <Navbar fixed="top" bg="dark"  variant={"dark"} expand="lg">
  <Container>
    <Navbar.Brand href="#carplaza">CAR PLAZA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link as={Link} to={"/"}>HOME</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>CONTACT</Nav.Link>
        <Nav.Link as={Link} to={"/login"}>LOGIN</Nav.Link>

      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
  )
}

export default Navbar1;
