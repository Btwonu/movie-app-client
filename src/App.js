import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { AuthContext, useAuth } from './contexts/AuthContext';

// Components
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

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
