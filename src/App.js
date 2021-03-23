import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/movies/Popular';
import TopRated from './pages/movies/TopRated';
import Upcoming from './pages/movies/Upcoming';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies/popular" component={Popular} />
        <Route path="/movies/top-rated" component={TopRated} />
        <Route path="/movies/upcoming" component={Upcoming} />
      </Switch>
    </div>
  );
}

export default App;
