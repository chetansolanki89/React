import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="bar">
      <Link className="link" to="/">Products</Link>
      <Link className="link" to="/products">ProductsAPI</Link>
      <Link className="link" to="/api">APIFetch</Link>
      <Link className="link" to="/photo">PhotoAPI</Link>
      <Link className="link" to="/live">LiveAPI</Link>
      <Link className="link" to="/reducounter">ReduCounter</Link>
      <Link className="link" to="/counterreducer">CounterReducer</Link>
      <Link className="link" to="/pracusereducer">useReducer</Link>
      <Link className="link" to="/checkredux">CheckRedux</Link>
      <Link className="link" to="/booksapi">BooksAPI</Link>
      <Link className="link" to="/useref">useRef</Link>
      {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{ color: "white", marginRight: "20px" }} to="/">
              Products
            </Link>
            <Link
              style={{ color: "white", marginRight: "20px" }}
              to="/products"
            >
              ProductsAPI
            </Link>
            <Link style={{ color: "white", marginRight: "20px" }} to="/api">
              APIFetch
            </Link>
            <Link style={{ color: "white", marginRight: "20px" }} to="/photo">
              PhotoAPI
            </Link>
            <Link style={{ color: "white", marginRight: "20px" }} to="/live">
              LiveAPI
            </Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default NavBar;
