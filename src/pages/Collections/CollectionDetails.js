import { useEffect, useState } from 'react';

// Services
import collectionService from '../../services/collectionService';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Bootstrap
import Button from 'react-bootstrap/Button';

const CollectionDetails = ({ match, history }) => {
  const [collection, setCollection] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteHandler = () => {
    collectionService
      .deleteCollection(match.params.collectionId)
      .then((res) => {
        console.log('Collection deleted', res);
        history.push('/collections');
      });
  };

  useEffect(() => {
    setLoading(true);
    let { collectionId } = match.params;

    collectionService
      .getOne(collectionId)
      .then((res) => {
        setCollection(res.data.collection);
        setMovies(res.data.movies);
        setLoading(false);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        <h2 className="text-center">{collection.title}</h2>
        <p className="text-center">{collection.description}</p>
        <MovieCardList movies={movies} />
        <Button onClick={deleteHandler} variant="danger">
          Delete Collection
        </Button>
      </div>
    );
  }
};

export default CollectionDetails;
