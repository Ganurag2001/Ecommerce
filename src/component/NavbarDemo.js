import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const NavbarDemo = () => {
  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://picsum.photos/70/50"
            alt="No image"
            className="img-thumbnail"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "7px",
                marginRight: "8px",
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/men"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "8px",
                marginRight: "8px",
              }}
            >
              Men
            </NavLink>

            <NavLink
              to="/women"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "8px",
                marginRight: "8px",
              }}
            >
              Women
            </NavLink>

            <NavDropdown
              style={{
                marginTop: "1px",
              }}
              title="Category"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/men">Men</NavDropdown.Item>
              <NavDropdown.Item href="/women">Women</NavDropdown.Item>
            </NavDropdown>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              id="wishlist"
              to="/wishlist"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "1px",
                marginLeft: "180px",
                marginRight: "-150px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
            </NavLink>

            <NavLink
              id="cart"
              to="/cart"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "1px",
                marginLeft: "180px",
                marginRight: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </NavLink>
            <NavLink
              to="/signup"
              style={{
                color: "rgba(255, 255, 255, 0.55)",
                textDecoration: "none",
                marginTop: "1px",
                marginLeft: "18px",
                marginRight: "10px",
              }}
            >
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarDemo;
