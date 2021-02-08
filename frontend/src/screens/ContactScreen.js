import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { contact } from '../actions/contactActions';
import { useDispatch, useSelector } from 'react-redux';
import Meta from '../components/Meta';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const contactForm = useSelector((state) => state.contactForm);
  const { loading, error, success } = contactForm;

  const onSubmitHandler = () => {
    dispatch(contact(name, email, phone, message));
  };
  return (
    <Container>
      <Meta title='Contact | Jungle Cafe' />
      <Row className='justify-content-md-center'>
        <Col id='contact-form' xs={12} md={6}>
          <h1 id='form-header'>Contact Us</h1>
          {success && <Message>Email has been sent.</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <h5 id='h5'>Meals Will Be Delivered Every Sunday</h5>
          <p id='location'>Toronto, Ontario junglecafescarb@gmail.com</p>
          <p>Tel: 416-200-3056</p>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId='name'>
              <Form.Label className='label'>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label className='label'>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='phone'>
              <Form.Label className='label'>Phone</Form.Label>
              <Form.Control
                type='phone'
                placeholder='Enter Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='message'>
              <Form.Label className='label'>Message</Form.Label>
              <Form.Control
                as='textarea'
                type='text'
                placeholder='Enter Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
