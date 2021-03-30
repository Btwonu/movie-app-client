import { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import CollectionCard from './CollectionCard';

class CollectionCardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="pt-4">
        {this.props.collections.map(
          ({ collectionId, creator, name, movies, description }) => (
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
                name={name}
                movieCount={movies.length}
                description={description}
              />
            </Col>
          )
        )}
      </Row>
    );
  }
}

export default CollectionCardList;
