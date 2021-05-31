import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  const { user } = useAuth();

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
        {user ? (
          <>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link> */}

            <Nav.Link as={Link} to="/collections">
              Collections
            </Nav.Link>

            <Nav.Link as={Link} to="/users/user">
              Profile
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/auth/login">
              Login
            </Nav.Link>

            <Nav.Link as={Link} to="/auth/register">
              Sign Up
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
