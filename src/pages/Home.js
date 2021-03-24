import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
import MovieCard from '../components/MovieCard/MovieCard';

const StyledSection = styled.section`
  .card {
    max-width: 180px;
    height: 100%;
  }
`;

function Home() {
  return (
    <StyledSection className="pt-4 d-flex">
      <Row>
        <Col>
          <MovieCard title="Batman" />
        </Col>
        <Col>
          <MovieCard title="Superman" />
        </Col>
        <Col>
          <MovieCard title="Shawshank's Redemption" />
        </Col>
        <Col>
          <MovieCard title="Greedy 5" />
        </Col>
        <Col>
          <MovieCard title="Dr. Dulitle" />
        </Col>
      </Row>
    </StyledSection>
  );
}

export default Home;
