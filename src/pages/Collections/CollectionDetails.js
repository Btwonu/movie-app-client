import { useEffect, useState } from 'react';
import collectionService from '../../services/collectionService';
import { useAuth } from '../../contexts/AuthContext';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Bootstrap
import Button from 'react-bootstrap/Button';

const CollectionDetails = ({ match, history }) => {
  const { user } = useAuth();
  const [collection, setCollection] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  let { collectionId } = match.params;

  const deleteHandler = () => {
    collectionService
      .deleteCollection(collectionId)
      .then((res) => {
        console.log(res.data);
        history.push('/collections');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);

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
        {user && user.userId == collection.creatorId ? (
          <Button onClick={deleteHandler} variant="danger">
            Delete Collection
          </Button>
        ) : null}
        <MovieCardList movies={movies} removeButton={true} />
      </div>
    );
  }
};

export default CollectionDetails;
