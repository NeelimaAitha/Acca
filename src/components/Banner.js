import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <Container>
      <Row>
        <Col md={8}>
          <h1>Become ACCA in 18 months</h1>
          <p>Acquire globally recognized accountancy qualification...</p>
          <Row>
            <Col>
              <Button variant="primary">Download Brochure</Button>
            </Col>
            <Col>
              <Button variant="danger">Need Assistance? Join Whatsapp</Button>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formPhoneNumber">
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formQualification">
              <Form.Control type="text" placeholder="Enter qualification" />
            </Form.Group>
            <Form.Group controlId="formInterestedIn">
              <Form.Control as="select">
                <option>Option 1</option>
                <option>Option 2</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Request Call Back</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Banner;
