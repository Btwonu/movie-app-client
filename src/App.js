import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Movie/Popular';
import TopRated from './pages/Movie/TopRated';
import Upcoming from './pages/Movie/Upcoming';
import Details from './pages/Movie/Details';
import Profile from './pages/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies/popular" component={Popular} />
          <Route path="/movies/top-rated" component={TopRated} />
          <Route path="/movies/upcoming" component={Upcoming} />
          <Route path="/movies/:movieId" component={Details} />
          <Route path="/users/user" component={Profile} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
