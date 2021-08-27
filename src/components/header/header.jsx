import React from "react";
import CartIcon from "../cart-icon/cart-icon";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import hopelogo from "../../assets/hopepurp.png";
import "./header.styles.scss";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <div className="row justify-content-between">
          <Link to="/" currentpath="/">
            <Navbar.Brand>
              <img className="logo-main" src={hopelogo} alt="Hope35 Logo" />
            </Navbar.Brand>
          </Link>
        </div>
        <ul className="nav justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav float-right">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Nav.Item className="nav-link">Active Stores</Nav.Item>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">More</NavDropdown.Item>
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
