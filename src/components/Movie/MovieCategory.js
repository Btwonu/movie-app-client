import { Link } from 'react-router-dom';

// Bootstrap
import Button from 'react-bootstrap/Button';

// Components
import MovieCardList from './MovieCardList';

// Utils
import createTitle from '../../utils/createTitle';

const MovieCategory = ({ category }) => {
  return (
    <section className="mb-4">
      <h2>{createTitle(category.name)}</h2>
      <hr />
      <MovieCardList className="mb-5" movies={category.movies} />
      <Button as={Link} to={category.url} variant="primary">
        See all
      </Button>
    </section>
  );
};

export default MovieCategory;
