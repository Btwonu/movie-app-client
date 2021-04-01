import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useAuth } from '../../contexts/AuthContext';

const CollectionModal = () => {
  const [show, setShow] = useState(false);
  const [collections, setCollections] = useState([]);
  const [chosenCollection, setChosenCollection] = useState('');

  const { login, user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    console.log(`${chosenCollection} was chosen!`);
    setChosenCollection('');
    login();
    setShow(false);
  };
  const handleChange = (e) => {
    setChosenCollection(e.target.value);
  };

  return (
    <>
      <p>{JSON.stringify(user)}</p>

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
                {user?.createdCollections?.map((collection) => {
                  return <option>{collection.title}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form>
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
