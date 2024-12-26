import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
        <footer className="bg-light shadow py-5">
      <Container>
        <Row className="justify-content-between">
          {/* Logo and Description */}
          <Col md={4}>
            <a href="/" className="d-flex align-items-center text-dark mb-3">
              
              <span className="ms-3 h5 font-weight-bold">Gold Bar</span>
            </a>
            <p style={{ maxWidth: '250px' }}>
              We are creating High Quality Resources and tools to Aid developers during the
              development of their projects.
            </p>
            {/* Social Media Icons */}
            <div className="d-flex mt-4">
              <Button variant="outline-dark" className="me-2" href="#">
                <FaFacebookF />
              </Button>
              <Button variant="outline-dark" className="me-2" href="#">
                <FaTwitter />
              </Button>
              <Button variant="outline-dark" href="#">
                <FaInstagram />
              </Button>
            </div>
          </Col>

          {/* Footer Links */}
          <Col md={2}>
            <h5 className="mb-4" style={{ fontWeight: '600' }}>GoldBar</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Resources</a></li>
              <li><a href="/" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Blog</a></li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="mb-4" style={{ fontWeight: '600' }}>Help</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Support</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Sign Up</a></li>
              <li><a href="/" className="text-dark text-decoration-none">Sign In</a></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <small className="text-muted">&copy; Design By Ali Hassan.</small>
        </div>
      </Container>
    </footer>
 
    </>
  ) 
}

export default Footer