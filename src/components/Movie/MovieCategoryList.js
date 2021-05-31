// Bootstrap
import Container from 'react-bootstrap/Container';

// Components
import MovieCategory from './MovieCategory';

const MovieCategoryList = (props) => {
  return (
    <Container>
      {props.categories.map((category) => (
        <MovieCategory key={category.name} category={category} />
      ))}
    </Container>
  );
};

export default MovieCategoryList;

// class MovieCategoryList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Container>
//         {this.props.categories.map((category) => (
//           <MovieCategory key={category.name} category={category} />
//         ))}
//       </Container>
//     );
//   }
// }
