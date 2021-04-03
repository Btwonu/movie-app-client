import { useEffect, useState, useRef } from 'react';
import movieService from '../services/movieService';

// Utils
import createTitle from '../utils/createTitle';

const useGetMovies = (category, pageNumber) => {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const prevPageNumberRef = useRef();

  useEffect(() => {
    if (prevPageNumber === pageNumber) {
      console.log('Page numbers are the same');
      return;
    }

    prevPageNumberRef.current = pageNumber;

    setIsLoading(true);

    movieService.getMovies(category, pageNumber).then(
      (result) => {
        setMovies((prevMovies) => [...prevMovies, ...result.data]);
        setIsLoading(false);
        setTitle(createTitle(category));
      },
      (err) => {
        setIsLoading(false);
        setError(err);
      }
    );
  }, [category, pageNumber]);

  const prevPageNumber = prevPageNumberRef.current;

  return [title, isLoading, movies, error];
};

export default useGetMovies;
