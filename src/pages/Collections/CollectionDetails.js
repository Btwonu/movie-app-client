import { useEffect, useState } from 'react';
import collectionService from '../../services/collectionService';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

const CollectionDetails = ({ match }) => {
  const [collection, setCollection] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let { collectionId } = match.params;

    collectionService
      .getOne(collectionId)
      .then((res) => {
        setCollection(res.data.collection);
        setMovies(res.data.movies);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div>
        Details
        <h2>{collection.title}</h2>
        <p>{match.params.collectionId}</p>
        <MovieCardList movies={movies} />
      </div>
    );
  }
};

export default CollectionDetails;
