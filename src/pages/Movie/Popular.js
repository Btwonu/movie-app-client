import { Component } from 'react';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';

// Services
import movieService from '../../services/movieService';

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };
  }

  componentDidMount() {
    movieService.getPopular().then(
      (movies) => {
        this.setState({ movies, isLoaded: true });
      },
      (error) => {
        this.setState({ error, isLoaded: true });
      }
    );
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    if (!isLoaded) {
      return <h2>Loading...</h2>;
    } else {
      return <MovieCardList movies={movies} />;
    }
  }
}

export default Popular;
