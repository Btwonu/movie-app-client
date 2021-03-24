import React from 'react';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const Card = styled.div`
  .collection-info {
    font-size: 0.7rem;
  }
`;

function CollectionCard({ title, numberOfTitles }) {
  return (
    <Card className="collection d-flex">
      <p className="collection-image">
        <Image src="https://via.placeholder.com/150" />
      </p>
      <div className="collection-info">
        <p className="ml-2 mb-0 font-weight-bold">{title}</p>
        <p className="ml-2 font-weight-bold text-muted">
          {numberOfTitles} titles
        </p>
      </div>
    </Card>
  );
}

export default CollectionCard;
