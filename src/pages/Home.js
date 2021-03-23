import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies/popular">Popular</Link>
      <Link to="/movies/top-rated">Top Rated</Link>
      <Link to="/movies/upcoming">Upcoming</Link>
    </div>
  );
}

export default Home;
