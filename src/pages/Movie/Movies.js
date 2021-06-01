import { useState, useRef, useCallback, useEffect } from 'react';

// Components
import MovieCardList from '../../components/Movie/MovieCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Custom Hooks
import useGetMovies from '../../hooks/useGetMovies';

const Movies = ({ match, history }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const observer = useRef();

  useEffect(() => {
    console.log('useEffect');

    if (history.location.state) {
      setPageNumber(history.location.state.lastPageNumber);
      console.log(history.location.state.lastPageNumber);
      console.log(history.location.state.lastScrollPosition);

      window.scroll(0, history.location.state.lastScrollPosition);
    }
  }, []);

  const [title, isLoading, movies, error] = useGetMovies(
    match.params.category,
    pageNumber
  );

  const detailsClickHandler = () => {
    let { pathname } = history.location;
    history.replace(pathname, {
      lastPageNumber: pageNumber,
      lastScrollPosition: window.scrollY,
    });

    console.log({
      lastPageNumber: pageNumber,
      lastScrollPosition: window.scrollY,
    });
  };

  const intersectingRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
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
      {movies && (
        <MovieCardList
          movies={movies}
          detailsClickHandler={detailsClickHandler}
          history={history}
        />
      )}

      {isLoading && <LoadingSpinner />}
      <div style={{ visibility: 'hidden' }} ref={intersectingRef}>
        Loader
      </div>
    </>
  );
};

export default Movies;
