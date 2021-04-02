import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

const StyledCard = styled.div`
  &:hover {
    text-decoration: none;
  }

  .collection-info {
    font-size: 0.7rem;
  }
`;

function ProfileCollectionCard({ collectionId, title, movieCount }) {
  return (
    <StyledCard
      as={Link}
      to={`/collections/${collectionId}`}
      className="collection d-flex"
    >
      <p className="collection-image">
        <Image src="https://via.placeholder.com/150" />
      </p>
      <div className="collection-info">
        <p className="ml-2 mb-0 font-weight-bold">{title}</p>
        <p className="ml-2 font-weight-bold text-muted">{movieCount} titles</p>
      </div>
    </StyledCard>
  );
}

export default ProfileCollectionCard;
