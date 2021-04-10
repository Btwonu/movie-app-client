// Bootstrap
import Alert from 'react-bootstrap/Alert';

const ErrorNotification = ({ message, setNotificationError }) => {
  return (
    <Alert
      className="mt-4"
      variant="danger"
      onClose={() => setNotificationError(null)}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default ErrorNotification;
