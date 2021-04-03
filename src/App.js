import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { AuthContext, useAuth } from './contexts/AuthContext';

// Components
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

axios.defaults.baseURL =
  'http://localhost:5001/movie-find-dev/europe-west1/api';

const App = () => {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
