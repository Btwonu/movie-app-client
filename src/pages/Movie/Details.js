import { Component } from 'react';

// Components
import CollectionModal from '../../components/Collection/CollectionModal';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

// Services
import movieService from '../../services/movieService';
import youtubeService from '../../services/youtubeService';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      trailer: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    let { movieId } = this.props.match.params;

    movieService.getOne(movieId).then((movie) => {
      this.setState({ movie });

      youtubeService
        .getTrailer(movie.title)
        .then((trailer) => {
          this.setState({ trailer: trailer });
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log('catched:', err);
          this.setState({ isLoading: false });
        });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />;
    } else {
      console.log('Movie:', this.state.movie);
      return (
        <>
          <h2 className="text-center mt-4">{this.state.movie.title}</h2>
          {this.state.trailer && (
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src={this.state.trailer}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <h6 className="mt-4 text-center">{this.state.movie.overview}</h6>

          <p>Year: {this.state.movie.release_date?.split('-')[0]}</p>

          <CollectionModal movieId={this.state.movie.id} />
        </>
      );
    }
  }
}

export default Details;
