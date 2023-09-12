import React, { useContext } from "react";
import { Nav, Navbar, Container, Form, Button } from "react-bootstrap";
import { Link, Navigate, Outlet } from "react-router-dom";
import Logo from "../assets/pokeapi_256.png";
import { PokemonContext } from "../context/PokemonContext";

function Navigation() {
  const { setSearchQuery, searchQuery } = useContext(PokemonContext);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width={150} src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex">
              <Form.Control
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navigation;
