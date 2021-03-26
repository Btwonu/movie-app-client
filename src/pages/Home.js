import { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import MovieCategoryList from '../components/Movie/MovieCategoryList';

// Services
import MovieService from '../services/movieService';

const StyledMain = styled.main``;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5001/movie-find-dev/europe-west1/api/movies').then(
      (res) =>
        res.json().then((categories) => {
          this.setState({ categories });
        })
    );
  }

  render() {
    return (
      <StyledMain className="pt-4 d-flex">
        <MovieCategoryList categories={this.state.categories} />
      </StyledMain>
    );
  }
}

export default Home;
