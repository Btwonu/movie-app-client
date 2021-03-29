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
        {[
          {
            title: 'A Collection Title',
            movieCount: 33,
            description: 'A nice description describing our collection.',
          },
          {
            title: 'Crime Movies',
            movieCount: 16,
            description: 'Some of my favorite movies about crime and stuff.',
          },
          {
            title: 'A Collection Title',
            movieCount: 33,
            description: 'A nice description describing our collection.',
          },
          {
            title: 'Crime Movies',
            movieCount: 16,
            description: 'Some of my favorite movies about crime and stuff.',
          },
          {
            title: 'A Collection Title',
            movieCount: 33,
            description: 'A nice description describing our collection.',
          },
          {
            title: 'Crime Movies',
            movieCount: 16,
            description: 'Some of my favorite movies about crime and stuff.',
          },
          {
            title: 'A Collection Title',
            movieCount: 33,
            description: 'A nice description describing our collection.',
          },
          {
            title: 'Crime Movies',
            movieCount: 16,
            description: 'Some of my favorite movies about crime and stuff.',
          },
        ].map(({ title, movieCount, description }) => (
          <Col xs="12" sm="6" md="4" lg="3" xl="3" className="mb-2">
            <CollectionCard
              title={title}
              movieCount={movieCount}
              description={description}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

export default CollectionCardList;
