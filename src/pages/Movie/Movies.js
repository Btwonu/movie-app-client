import { Component } from 'react';

// Bootstrap
import { Row } from 'react-bootstrap';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Services
import movieService from '../../services/movieService';

// Utils
import createTitle from '../../utils/createTitle';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      movies: [],
      title: '',
    };
  }

  componentDidMount() {
    let { category } = this.props.match.params;

    this.setState({ isLoading: true });

    movieService.getMovies(category).then(
      (movies) => {
        this.setState({
          movies,
          isLoading: false,
          title: createTitle(category),
        });
      },
      (error) => {
        this.setState({ error, isLoading: false });
      }
    );
  }

  componentDidUpdate(prevProps) {
    let { category } = this.props.match.params;

    if (prevProps.match.params.category == category) return;
    this.setState({ isLoading: true });

    movieService.getMovies(category).then(
      (movies) => {
        this.setState({
          movies,
          isLoading: false,
          title: createTitle(category),
        });
      },
      (error) => {
        this.setState({ error, isLoading: false });
      }
    );
  }

  render() {
    const { error, isLoading, movies } = this.state;
    if (isLoading) {
      return <LoadingSpinner />;
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
