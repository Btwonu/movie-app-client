import { Component } from 'react';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';

// Services
import movieService from '../../services/movieService';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      currentCategory: 'upcoming',
    };
  }

  componentDidMount() {
    movieService.getMovies(this.state.currentCategory).then(
      (movies) => {
        this.setState({ movies, isLoaded: true });
      },
      (error) => {
        this.setState({ error, isLoaded: true });
      }
    );
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params;

    if (prevProps.match.params.category == category) return;

    this.setState({ isLoaded: false });

    movieService.getMovies(category).then(
      (movies) => {
        this.setState({ movies, isLoaded: true, currentCategory: category });
      },
      (error) => {
        this.setState({ error, isLoaded: true, currentCategory: category });
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

export default Movies;
