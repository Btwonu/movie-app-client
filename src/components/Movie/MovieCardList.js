import { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import MovieCard from './MovieCard';

class MovieCardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="pt-4">
        <Row>
          {this.props.movies.map(
            ({ tmdbId, date, imageUrl, voteAverage, title }) => (
              <Col
                key={tmdbId}
                xs="12"
                sm="6"
                md="4"
                lg="3"
                xl="3"
                className="mb-2"
              >
                <MovieCard
                  id={tmdbId}
                  title={title}
                  imageUrl={imageUrl}
                  rating={voteAverage}
                  year={date}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    );
  }
}

export default MovieCardList;
