import { useEffect } from 'react';
import collectionService from '../../services/collectionService';

const CollectionDetails = ({ match }) => {
  useEffect(() => {
    let { collectionId } = match.params;
    collectionService
      .getOne(collectionId)
      .then((res) => console.log({ res }))
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  return (
    <div>
      Details
      <p>{match.params.collectionId}</p>
    </div>
  );
};

export default CollectionDetails;
