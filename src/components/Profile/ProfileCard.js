import { Link } from 'react-router-dom';
import styled from 'styled-components';

import avatar from '../../assets/icons/avatar.svg';
import ProfileField from './ProfileField';
import CollectionCard from './CollectionCard';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

function ProfileCard() {
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
                User
              </Card.Text>
            </Card.Header>
            <Card>
              <Card.Body>
                <Card.Title>Account Details</Card.Title>
                <hr />
                <ProfileField property="Name" value="User Userov" />
                <ProfileField property="Email" value="user@example.com" />
                <ProfileField property="Movies Liked" value="33" />
                <ProfileField property="Collections Followed" value="3" />
                <ProfileField property="Social" />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <section className="collections mb-4">
                  <Card.Title>Movie Collections</Card.Title>
                  <hr />
                  <Row className="d-flex">
                    <Col>
                      <CollectionCard
                        title="Crime Movies"
                        numberOfTitles="17"
                      />
                    </Col>
                    <Col>
                      <CollectionCard
                        title="Adventure Movies"
                        numberOfTitles="23"
                      />
                    </Col>
                    <Col>
                      <CollectionCard title="Horror Films" numberOfTitles="8" />
                    </Col>
                    <Col>
                      <CollectionCard
                        title="Documentaries"
                        numberOfTitles="66"
                      />
                    </Col>
                  </Row>
                  <Button as={Link} to="/collections/create">
                    Create Collection
                  </Button>
                </section>

                <section className="friends">
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
                </section>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </StyledSection>
  );
}

export default ProfileCard;
