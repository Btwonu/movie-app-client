import React from 'react';

// Bootstrap
import Card from 'react-bootstrap/Card';

const MovieCard = ({ title }) => {
  return (
    <Card bg="dark" text="white">
      <Card.Img variant="top" src="https://via.placeholder.com/180" />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <span className="material-icons" style={{ color: 'yellow' }}>
          star_rate
        </span>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
