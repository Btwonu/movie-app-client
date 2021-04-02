import { useEffect, useState } from 'react';
import collectionService from '../../services/collectionService';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';

const CollectionDetails = ({ match }) => {
  const [collection, setCollection] = useState({});
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let { collectionId } = match.params;

    collectionService
      .getOne(collectionId)
      .then((res) => {
        setCollection(res.data.collection);
        setMovies(res.data.movies);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  return (
    <div>
      {console.log({ movies, collection })}
      Details
      <h2>{collection.title}</h2>
      <p>{match.params.collectionId}</p>
      <MovieCardList movies={movies} />
    </div>
  );
};

export default CollectionDetails;
