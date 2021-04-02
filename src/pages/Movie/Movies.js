import { useState, useEffect, useRef } from 'react';

// Bootstrap
import { Row } from 'react-bootstrap';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Services
import movieService from '../../services/movieService';

// Utils
import createTitle from '../../utils/createTitle';

const Movies = ({ match }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const prevCategoryRef = useRef();

  useEffect(() => {
    let currentCategory = match.params.category;

    if (prevCategory === currentCategory) {
      console.log('Categories are the same');
      return;
    }

    prevCategoryRef.current = currentCategory;

    setIsLoading(true);

    movieService.getMovies(currentCategory).then(
      (movies) => {
        setMovies(movies);
        setIsLoading(false);
        setTitle(createTitle(currentCategory));
      },
      (err) => {
        setIsLoading(false);
        setError(err);
      }
    );
  }, []);

  const prevCategory = prevCategoryRef.current;

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <h2 className="text-center pt-4">{title} Movies</h2>
        <MovieCardList movies={movies} />
      </>
    );
  }
};

export default Movies;
