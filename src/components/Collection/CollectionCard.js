import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StyledCard = styled.div``;

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
          <Button as={Link} to={`/${collectionId}`} variant="primary">
            Look Inside
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{movieCount} titles</Card.Footer>
      </Card>
    </StyledCard>
  );
}

export default CollectionCard;
