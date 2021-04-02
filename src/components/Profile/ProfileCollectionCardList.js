import { Component } from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import ProfileCollectionCard from './ProfileCollectionCard';

const ProfileCollectionCardList = ({ collections }) => {
  return (
    <Row className="pt-4">
      {collections?.map(({ collectionId, title, movies }) => (
        <Col key={collectionId}>
          <ProfileCollectionCard
            collectionId={collectionId}
            title={title}
            movieCount={movies.length}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProfileCollectionCardList;
