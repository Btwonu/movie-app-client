import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Bootstrap
import Card from 'react-bootstrap/Card';

const StyledDiv = styled.div`
  width: 250px;
  height: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  .card {
    height: 100%;

    &:hover {
      text-decoration: none;
    }
  }

  .movie-poster {
    height: auto;
  }

  .card-title {
    font-size: 1rem;
  }

  .movie-rating {
    .material-icons {
      color: yellow;
    }
  }

  /* a:hover {
    text-decoration: none;
  } */
`;

const MovieCard = ({ title, imageUrl, rating, year, id }) => {
  return (
    <StyledDiv>
      <Card
        as={Link}
        to={`/movies/${id}`}
        bg="dark"
        text="white"
        className="border-top border-secondary rounded-lg"
      >
        <Card.Img
          className="movie-poster img-fluid"
          variant="top"
          src={imageUrl}
        />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
        </Card.Body>

        <Card.Footer className="pt-2 pb-2 d-flex justify-content-between">
          <p className="movie-rating m-0 d-flex">
            <span className="material-icons">star_rate</span>
            <span className="pl-2">{rating}</span>
          </p>
          <small className="text-muted d-flex align-items-center">{year}</small>
        </Card.Footer>
      </Card>
    </StyledDiv>
  );
};

export default MovieCard;
