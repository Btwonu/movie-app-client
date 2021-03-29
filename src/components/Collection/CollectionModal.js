import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CollectionModal = () => {
  const [show, setShow] = useState(false);
  const [chosenCollection, setChosenCollection] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    console.log(`${chosenCollection} was chosen!`);
    setChosenCollection('');
    setShow(false);
  };
  const handleChange = (e) => {
    setChosenCollection(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to Collection
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Select</Form.Label>
              <Form.Control as="select" onChange={handleChange}>
                <option value="">Choose Collection</option>
                <option>Crime Movies</option>
                <option>Romantic Movies</option>
                <option>Animations</option>
                <option>Documentaries</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <p>{chosenCollection}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CollectionModal;
