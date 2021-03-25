import { Component } from 'react';

// Components
import MovieCard from './MovieCard';

class MovieCardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.movies.map(
          ({ tmdbId, date, imageUrl, voteAverage, title }) => (
            <MovieCard
              key={tmdbId}
              id={tmdbId}
              title={title}
              imageUrl={imageUrl}
              rating={voteAverage}
              year={date}
            />
          )
        )}
      </>
    );
  }
}

export default MovieCardList;
