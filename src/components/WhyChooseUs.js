import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';

const WhyChooseUs = () => (
  <Container className="why-choose-us">
    <h2>Why Choose Us?</h2>
    <Row>
      <Col md={4}>
        <div className="feature-box">
          <h3>Expert Faculty</h3>
          <p>Our Faculty are subject matter experts with practical experience...</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="feature-box">
          <h3>Complete Success Package</h3>
          <p>Leading Exam Prep Destination with Video classes, Live sessions...</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="feature-box">
          <h3>Placements</h3>
          <p>Resume building workshops, mock interviews and placement drives...</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default WhyChooseUs;
