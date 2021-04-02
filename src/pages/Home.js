import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import MovieCategoryList from '../components/Movie/MovieCategoryList';
import LoadingSpinner from '../components/Layout/LoadingSpinner';

const StyledMain = styled.main``;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios('/movies')
      .then((categories) => {
        this.setState({ categories: categories.data, isLoading: false });
      })
      .catch((err) => {
        console.log('Home error:', err);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />;
    } else {
      return (
        <StyledMain className="pt-4 d-flex">
          <MovieCategoryList categories={this.state.categories} />
        </StyledMain>
      );
    }
  }
}

export default Home;
