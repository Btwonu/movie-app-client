import { Component, useState, useEffect } from 'react';

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
      loading: false,
    };
    console.log('from details', this.props.match.params);
  }

  componentDidMount() {
    this.setState({ loading: true });

    let { movieId } = this.props.match.params;
    console.log('from details', movieId);

    movieService.getOne(movieId).then((result) => {
      console.log('thend getOne');
      this.setState({ movie: result.data });

      youtubeService.getTrailer(this.state.movie.title).then((trailer) => {
        this.setState({ trailer });
        this.setState({ loading: false });
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <>
          <h2 className="text-center">{this.state.movie.title}</h2>

          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              src={this.state.trailer}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <CollectionModal movieId={this.state.movie.tmdbId} />
        </>
      );
    }
  }
}

// const Details = ({ match }) => {
//   const [movie, setMovie] = useState({});
//   const [trailer, setTrailer] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [movieTitle, setMovieTitle] = useState('');

//   useEffect(() => {
//     setLoading(true);

//     let { movieId } = match.params;

//     movieService.getOne(movieId).then((result) => {
//       setMovie(result.data);
//       setMovieTitle(movie.title);
//     });
//   }, []);

//   useEffect(() => {
//     youtubeService.getTrailer(movieTitle).then((trailer) => {
//       setTrailer(trailer);
//       setLoading(false);
//     });
//   }, [movieTitle]);

//   if (loading) {
//     return <LoadingSpinner />;
//   } else {
//     return (
//       <>
//         <h2 className="text-center">{movie.title}</h2>

//         <div class="embed-responsive embed-responsive-16by9">
//           <iframe
//             src={trailer}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>

//         <CollectionModal movieId={movie.tmdbId} />
//       </>
//     );
//   }
// };

export default Details;
