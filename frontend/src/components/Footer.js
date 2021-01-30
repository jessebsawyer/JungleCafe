import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col id='footer-copy' className='text-center py-5'>
            Copyright &copy; Jungle Cafe 2021
          </Col>
          <Row>
            <Col id='instagram-col'>
              <Nav.Link href='https://www.instagram.com/chefalexjc/'>
                <i id='instagram' className='fab fa-instagram'></i>
              </Nav.Link>
            </Col>
            <Col id='facebook-col'>
              <Nav.Link href='https://www.facebook.com/JungleCafeMealprep/'>
                <i id='facebook' className='fab fa-facebook'></i>
              </Nav.Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
