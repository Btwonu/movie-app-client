import { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Components
import MovieCategoryList from '../components/Movie/MovieCategoryList';

const StyledMain = styled.main``;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios('/movies')
      .then((categories) => {
        this.setState({ categories: categories.data });
      })
      .catch((err) => {
        console.log('Home error:', err);
      });
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
