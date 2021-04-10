import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movie/Movies';
import Details from './pages/Movie/Details';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Collections from './pages/Collections/Collections';
import CollectionDetails from './pages/Collections/CollectionDetails';
import CreateCollection from './pages/Collections/CreateCollection';
// import Users from './pages/Users';
import Page404 from './pages/Page404';

import Layout from './components/Layout/Layout';

const AuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/movies/categories/:category" component={Movies} />
          <Route path="/movies/:movieId" component={Details} />
          <Route exact path="/collections" component={Collections} />
          <Route
            exact
            path="/collections/create"
            component={CreateCollection}
          />
          <Route
            path="/collections/:collectionId"
            component={CollectionDetails}
          />
          {/* <Route exact path="/users" component={Users} /> */}
          <Route path="/users/user" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const UnauthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="*" component={Page404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export { AuthenticatedRoutes, UnauthenticatedRoutes };
