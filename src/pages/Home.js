import { useState, useEffect } from 'react';
import styled from 'styled-components';
import movieService from '../services/movieService';

// Components
import MovieCategoryList from '../components/Movie/MovieCategoryList';
import LoadingSpinner from '../components/Layout/LoadingSpinner';

const StyledMain = styled.main``;

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    movieService
      .getCategories()
      .then((result) => {
        if (!isCancelled) {
          setCategories(result.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log('Home error:', err);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <StyledMain className="pt-4 d-flex">
      <MovieCategoryList categories={categories} />
    </StyledMain>
  );
};

export default Home;
