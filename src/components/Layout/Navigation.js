import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styled from 'styled-components';

const StyledDiv = styled.div`
  .navbar-light .navbar-nav .nav-link {
    color: #343434;
  }
`;

const NavigationWrapper = styled.div``;

function Navigation() {
  const { user, logout } = useAuth();

  return (
    <StyledDiv>
      <Navbar
        className="d-flex justify-content-between"
        bg="primary"
        variant="light"
        fixed="top"
      >
        <NavigationWrapper className="container">
          <Navbar.Brand as={Link} to="/">
            Movie<strong>Find</strong>
          </Navbar.Brand>

          <Nav>
            {user ? (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/collections">
                  Collections
                </Nav.Link>
                <Nav.Link as={Link} to="/users/user">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="" onClick={logout}>
                  Logout
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
        </NavigationWrapper>
      </Navbar>
    </StyledDiv>
  );
}

export default Navigation;
