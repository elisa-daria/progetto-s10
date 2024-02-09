import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const EpiMeteoNavBar = () => {
  const location = useLocation();
  return (
    <Navbar expand="sm" bg="info-subtle" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="fs-2 fw-bold">
          <i className="bi bi-wind me-1"></i>
          <i className="bi bi-umbrella"></i> EPIMETEO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={`fw-bold nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/detail/:city"
              className={`fw-bold nav-link ${
                location.pathname === "/detail/:city" ? "active" : ""
              }`}
            >
              Details
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EpiMeteoNavBar;
