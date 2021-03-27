import { Link } from 'react-router-dom';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
    <Navbar
      className="d-flex justify-content-between"
      bg="primary"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand as={Link} to="/">
        Movie<strong>Find</strong>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
        <Nav.Link as={Link} to="/collections">
          Collections
        </Nav.Link>
        <Nav.Link as={Link} to="/users/user">
          Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/auth/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/auth/register">
          Sign Up
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
