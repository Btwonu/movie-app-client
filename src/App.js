import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { AuthContext, useAuth } from './contexts/AuthContext';

// Components
import { AuthenticatedRoutes, UnauthenticatedRoutes } from './routes';

axios.defaults.baseURL =
  'http://localhost:5001/movie-find-dev/europe-west1/api';

const App = () => {
  const { user } = useAuth();

  console.log('From app USER:', user);
  // return (
  //   <Layout>
  //     <Switch>
  //       <Route exact path="/" component={Home} />

  //       <Route path="/movies/categories/:category" component={Movies} />
  //       <Route path="/movies/:movieId" component={Details} />
  //       <Route exact path="/collections" component={Collections} />
  //       <Route exact path="/collections/create" component={CreateCollection} />
  //       <Route
  //         path="/collections/:collectionId"
  //         component={CollectionDetails}
  //       />
  //       <Route exact path="/users" component={Users} />
  //       <Route path="/users/user" component={Profile} />
  //       <Route path="/auth/login" component={Login} />
  //       <Route path="/auth/register" component={Register} />
  //     </Switch>
  //   </Layout>
  // );

  return <>{user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}</>;
};

export default App;
