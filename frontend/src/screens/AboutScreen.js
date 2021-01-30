import React from 'react';
import { Image, Container, Col, Row } from 'react-bootstrap';
import aboutImage from '../aboutImage.jpg';
import Meta from '../components/Meta';

const AboutScreen = () => {
  return (
    <Container>
      <Meta title='About | Jungle Cafe' />
      <div className='about'>
        <Row className='justify-content-center'>
          <h1 id='about-h1'>About Chef Alex</h1>
        </Row>
        <Row>
          <Col>
            <Image src={aboutImage} roundedCircle />
          </Col>
          <Col id='about-p'>
            <p>
              Junglecafe est in 2017 provides onsite catering, meal plans, and
              nutritional coaching.
            </p>
            <p>
              Led by Chef Alex, his 10+ years in the industry has allowed him to
              use his wealth of experience including working overseas along with
              two diplomas in Nutrition Management & Culinary Arts to fuse
              together delicious meals.
            </p>
            <p>
              We provide our customers with the best, most delicious, and of
              course, freshest products in the Toronto area. Our customers rave
              about our Classic & Favorite dishes. Visit our Instagram page for
              more photo's.
            </p>
            <p>
              We guarantee that once you do, you’ll soon understand what the
              buzz is all about.
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default AboutScreen;
