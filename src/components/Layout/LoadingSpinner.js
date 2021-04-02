import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <Row className="mt-4 pt-4">
      <Spinner
        variant="secondary"
        className="mt-4 ml-auto mr-auto"
        animation="border"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );
};

export default LoadingSpinner;
