import { Component } from 'react';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';

// Services
import movieService from '../../services/movieService';

// Utils
import createTitle from '../../utils/createTitle';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      title: '',
    };
  }

  componentDidMount() {
    let { category } = this.props.match.params;

    movieService.getMovies(category).then(
      (movies) => {
        this.setState({ movies, isLoaded: true, title: createTitle(category) });
      },
      (error) => {
        this.setState({ error, isLoaded: true });
      }
    );
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params;

    if (prevProps.match.params.category == category) return;
    console.log(category);
    this.setState({ isLoaded: false });

    movieService.getMovies(category).then(
      (movies) => {
        this.setState({ movies, isLoaded: true, title: createTitle(category) });
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
      return (
        <>
          <h2 className="text-center pt-4">{this.state.title} Movies</h2>
          <MovieCardList movies={movies} />
        </>
      );
    }
  }
}

export default Movies;
