import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Learn.css';

const Learn = () => (
  <Container className="learn">
    <h2>What will you Learn in ACCA?</h2>
    <Row>
      <Col md={4}>
        <div className="learn-box">
          <h3>Knowledge Level</h3>
          <ul>
            <li>Business and Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ul>
        </div>
      </Col>
      <Col md={4}>
        <div className="learn-box">
          <h3>Skill Level</h3>
          <ul>
            <li>Corporate and Business Law (LW)</li>
            <li>Performance Management (PM)</li>
            <li>Taxation (TX)</li>
          </ul>
        </div>
      </Col>
      <Col md={4}>
        <div className="learn-box">
          <h3>Professional Level</h3>
          <ul>
            <li>SBL - Strategic Business Leader</li>
            <li>SBR - Strategic Business Reporting</li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Learn;
