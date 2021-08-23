import React from "react";
import CartIcon from "../cart-icon/cart-icon";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import hopelogo from "../../assets/hopepurp.png";
import "./header.styles.scss";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <div className="row justify-content-between">
          <Link to="/" currentPath="/">
            <Navbar.Brand href="#home">
              <img className="logo-main" src={hopelogo} alt="Hope35 Logo" />{" "}
            </Navbar.Brand>
          </Link>
        </div>
        <ul className="nav justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav float-right">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <CartIcon />
            </Nav>
          </Navbar.Collapse>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Header;
