import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../contexts/AuthContext';

import avatar from '../../assets/icons/avatar.svg';
import ProfileField from './ProfileField';
import ProfileCollectionCardList from './ProfileCollectionCardList';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const StyledSection = styled.section`
  .avatar {
    margin-bottom: 0;

    img {
      max-width: 48px;
    }
  }

  .card-header {
    width: 100%;
    margin-top: 48px;
  }

  .card {
    margin: 0;
  }

  .collections {
    img {
      max-width: 64px;
    }
  }
`;

const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <StyledSection>
      <Row>
        <Col xs={12}>
          <CardGroup>
            <Card.Header className="border d-flex">
              <p className="avatar">
                <Image src={avatar} roundedCircle></Image>
              </p>
              <Card.Text className="d-flex align-items-center ml-2">
                {user?.username}
              </Card.Text>
            </Card.Header>
            <Card>
              <Card.Body>
                <Card.Title>Account Details</Card.Title>
                <hr />
                <ProfileField property="Name" value={user?.username} />
                <ProfileField property="Email" value={user?.email} />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <section className="collections mb-4">
                  <Card.Title>Movie Collections</Card.Title>
                  <hr />

                  <Row className="d-flex">
                    <Col>
                      <ProfileCollectionCardList
                        collections={user?.createdCollections}
                      />
                    </Col>
                  </Row>
                  <Button as={Link} to="/collections/create">
                    Create Collection
                  </Button>
                </section>

                {/* <section className="friends">
                  <Card.Title>Friends</Card.Title>
                  <hr />
                  <Row className="d-flex">
                    <Col>
                      <p className="avatar">
                        <Image src={avatar} roundedCircle></Image>
                      </p>
                    </Col>
                    <Col>
                      <p className="avatar">
                        <Image src={avatar} roundedCircle></Image>
                      </p>
                    </Col>
                    <Col>
                      <p className="avatar">
                        <Image src={avatar} roundedCircle></Image>
                      </p>
                    </Col>
                    <Col>
                      <p className="avatar">
                        <Image src={avatar} roundedCircle></Image>
                      </p>
                    </Col>
                  </Row>
                </section> */}
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default ProfileCard;
