import { useEffect } from 'react';
import axios from 'axios';

import { useAuth } from './contexts/AuthContext';

// Components
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

// axios.defaults.baseURL =
//   'http://localhost:5001/movie-find-dev/europe-west1/api';

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  axios.defaults.baseURL =
    'http://localhost:5001/movie-find-dev/europe-west1/api';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL =
    'https://europe-west1-movie-find-dev.cloudfunctions.net/api';
}

const App = () => {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
