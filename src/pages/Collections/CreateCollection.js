import { useState } from 'react';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Services
import collectionService from '../../services/collectionService';

const CreateCollection = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    collectionService.create(title, description).then((res) => {
      console.log('Successfully created collection:', title);
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name == 'name') {
      setTitle(value);
    }

    if (name == 'description') {
      setDescription(value);
    }
  };

  return (
    <>
      <Form className="border shadow-sm mt-4 p-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Collection Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter collection title"
            value={title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Collection Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            placeholder="Describe this collection"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreateCollection;
