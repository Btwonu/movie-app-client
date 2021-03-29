import React from 'react';
import styled from 'styled-components';

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StyledCard = styled.div``;

function CollectionCard({ title, description, movieCount }) {
  return (
    <StyledCard>
      <Card className="text-center">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Look Inside</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{movieCount} movies</Card.Footer>
      </Card>
    </StyledCard>
  );
}

export default CollectionCard;
