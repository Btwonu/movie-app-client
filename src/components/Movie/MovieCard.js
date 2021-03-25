import React from 'react';
import styled from 'styled-components';

// Bootstrap
import Card from 'react-bootstrap/Card';

const StyledDiv = styled.div`
  width: 200px;
  height: 100%;

  .card {
    height: 100%;
  }

  .movie-poster {
    height: 66%;
  }

  .card-title {
    font-size: 1rem;
  }

  .movie-rating {
    .material-icons {
      color: yellow;
    }
  }
`;

const MovieCard = ({ title, imageUrl, rating, year, id }) => {
  return (
    <StyledDiv>
      <p>{id}</p>
      <Card bg="dark" text="white" className="border border-light rounded-lg">
        <Card.Img className="movie-poster" variant="top" src={imageUrl} />
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
