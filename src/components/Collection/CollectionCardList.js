// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import CollectionCard from './CollectionCard';

const CollectionCardList = (props) => {
  return (
    <Row className="pt-4">
      {props.collections.map(
        ({ collectionId, creator, title, movies, description }) => (
          <Col
            key={collectionId}
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            className="mb-2"
          >
            <CollectionCard
              collectionId={collectionId}
              creator={creator}
              title={title}
              movieCount={movies.length}
              description={description}
            />
          </Col>
        )
      )}
    </Row>
  );
};

export default CollectionCardList;

// class CollectionCardList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Row className="pt-4">
//         {this.props.collections.map(
//           ({ collectionId, creator, title, movies, description }) => (
//             <Col
//               key={collectionId}
//               xs="12"
//               sm="6"
//               md="4"
//               lg="3"
//               xl="3"
//               className="mb-2"
//             >
//               <CollectionCard
//                 collectionId={collectionId}
//                 creator={creator}
//                 title={title}
//                 movieCount={movies.length}
//                 description={description}
//               />
//             </Col>
//           )
//         )}
//       </Row>
//     );
//   }
// }
