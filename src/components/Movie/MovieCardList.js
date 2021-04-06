import { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import MovieCard from './MovieCard';

class MovieCardList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.movies);
  }

  render() {
    return (
      <Row className="pt-4">
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
                removeButton={this.props.removeButton}
              />
            </Col>
          )
        )}
      </Row>
    );
  }
}

export default MovieCardList;
