import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MovieCategory from '../components/Movie/MovieCategory';

// Services
import MovieService from '../services/movieService';

const StyledMain = styled.main``;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          name: 'Upcoming',
          movies: [
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
          ],
        },
        {
          name: 'Top Rated',
          movies: [
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
          ],
        },
        {
          name: 'Popular',
          movies: [
            { title: 'Movie Title', year: 2015, rating: 8 },
            { title: 'Movie Title', year: 2015, rating: 8 },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <StyledMain className="pt-4 d-flex">
        <Container>
          {this.state.categories.map(({ name, movies }) => {
            return <MovieCategory name={name} movies={movies} />;
          })}
        </Container>
      </StyledMain>
    );
  }
}

export default Home;
