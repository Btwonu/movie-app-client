import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const StyledCard = styled.div`
  height: 100%;

  .card {
    height: 100%;
  }
`;

function CollectionCard({
  collectionId,
  creator,
  title,
  description,
  movieCount,
}) {
  return (
    <StyledCard>
      <Card className="text-center">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Button
            as={Link}
            to={`/collections/${collectionId}`}
            variant="primary"
          >
            Look Inside
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <p className="m-0">
            Created by <strong>{creator.username}</strong>
          </p>
          <p className="m-0">{movieCount} titles</p>
        </Card.Footer>
      </Card>
    </StyledCard>
  );
}

export default CollectionCard;
