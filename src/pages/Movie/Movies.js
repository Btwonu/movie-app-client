import { useState, useRef, useCallback } from 'react';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Custom Hooks
import useGetMovies from '../../hooks/useGetMovies';

const Movies = ({ match }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  const [title, isLoading, movies, error] = useGetMovies(
    match.params.category,
    pageNumber
  );

  const intersectingRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log('Is Intersecting');
          console.log(entries[0]);
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading]
  );

  return (
    <>
      <h2 className="text-center pt-4">{title} Movies</h2>
      {movies && <MovieCardList movies={movies} />}
      {isLoading && <LoadingSpinner />}
      <div style={{ visibility: 'hidden' }} ref={intersectingRef}>
        Loader
      </div>
    </>
  );
};

export default Movies;
