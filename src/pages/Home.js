import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import MovieCard from '../components/MovieCard/MovieCard';

const StyledSection = styled.section``;

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
