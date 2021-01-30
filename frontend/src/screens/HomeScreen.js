import React from 'react';
import { Button, Jumbotron, Row, Col } from 'react-bootstrap';
import Meta from '../components/Meta';

const HomeScreen = ({ history }) => {
  const clickHandler = () => {
    history.push('/meals');
  };
  return (
    <>
      <Meta title='Welcome | Jungle Cafe' />
      <Jumbotron fluid>
        <h1>Choose Your Meals</h1>

        <p>
          <Button type='button' onClick={clickHandler}>
            Get Started
          </Button>
        </p>
      </Jumbotron>

      <Row className='justify-content-center'>
        <Col>
          <h3 className='home-row'>Budget Friendly</h3>
        </Col>
        <Col>
          <h3 className='home-row'>Healthy Meals</h3>
        </Col>
        <Col>
          <h3 className='home-row'>Fast Delivery</h3>
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
