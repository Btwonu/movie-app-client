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

// Components
import ProfileCard from '../components/ProfileCard/ProfileCard';

function Home() {
  return (
    <div>
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
          <Nav.Link as={Link} to="/movies/popular">
            Popular
          </Nav.Link>
          <Nav.Link as={Link} to="/movies/top-rated">
            Top Rated
          </Nav.Link>
          <Nav.Link as={Link} to="/movies/upcoming">
            Upcoming
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container fluid className="mt-5">
        <ProfileCard />
      </Container>
    </div>
  );
}

export default Home;
