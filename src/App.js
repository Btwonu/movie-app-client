import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Movies from './pages/Movie/Movies';
import Details from './pages/Movie/Details';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Collections from './pages/Collections';
import Users from './pages/Users';

import Layout from './components/Layout/Layout';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/movies" component={Movies} /> */}
          <Route path="/movies/categories/:category" component={Movies} />
          <Route path="/movies/:movieId" component={Details} />
          <Route exact path="/collections" component={Collections} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/user" component={Profile} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
