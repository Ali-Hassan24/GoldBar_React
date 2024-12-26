import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 200 });
  }, []);

  return (
    <div className="py-5 bg-light team1">
      <Container>
        {/* Header */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="mb-4 font-weight-bold" data-aos="fade-up">Our Experienced & Professional Team</h2>
            <p className="text-muted" data-aos="fade-up" data-aos-delay="100">
              Rely on our amazing features list and top-notch customer service to have a great experience with us, without a doubt.
            </p>
          </Col>
        </Row>

        {/* Team Members */}
        <Row className="g-4">
          {/* Team Member 1 */}
          <Col lg={6} data-aos="fade-right">
            <Card className="border-0 shadow-lg">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img
                    src='https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc='
                    alt="Team Member"
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7} className="d-flex align-items-center">
                  <Card.Body>
                    <Card.Title as="h5" className="font-weight-bold mb-2">Michael Doe</Card.Title>
                    <Card.Text className="text-muted">
                      Our services and features will be an exceptional experience for you.
                    </Card.Text>
                    <div className="d-flex justify-content-start">
                      <a href="#" className="text-muted me-3"><i className="bi bi-facebook fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-twitter fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-instagram fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-behance fs-4"></i></a>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Team Member 2 */}
          <Col lg={6} data-aos="fade-right" data-aos-delay="200">
            <Card className="border-0 shadow-lg">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img
                    src='https://img.freepik.com/premium-photo/handsome-male-fashion-model-zip-up-jacket-male-dress-with-navy-blue-mens-background-fashion-portrait-featuring-lifestyle-approach_171965-51176.jpg'
                    alt="Team Member"
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7} className="d-flex align-items-center">
                  <Card.Body>
                    <Card.Title as="h5" className="font-weight-bold mb-2">Sarah Johnson</Card.Title>
                    <Card.Text className="text-muted">
                      We provide a great experience with our amazing features and customer services.
                    </Card.Text>
                    <div className="d-flex justify-content-start">
                      <a href="#" className="text-muted me-3"><i className="bi bi-facebook fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-twitter fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-instagram fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-behance fs-4"></i></a>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Add more team members as needed */}
          <Col lg={6} data-aos="fade-right" data-aos-delay="400">
            <Card className="border-0 shadow-lg">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img
                    src='https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid'
                    alt="Team Member"
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7} className="d-flex align-items-center">
                  <Card.Body>
                    <Card.Title as="h5" className="font-weight-bold mb-2">Sarah Johnson</Card.Title>
                    <Card.Text className="text-muted">
                      We provide a great experience with our amazing features and customer services.
                    </Card.Text>
                    <div className="d-flex justify-content-start">
                      <a href="#" className="text-muted me-3"><i className="bi bi-facebook fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-twitter fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-instagram fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-behance fs-4"></i></a>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col lg={6} data-aos="fade-right" data-aos-delay="600">
            <Card className="border-0 shadow-lg">
              <Row className="g-0">
                <Col md={5}>
                  <Card.Img
                    src='https://media.istockphoto.com/id/1177546746/photo/millennial-dissatisfied-serious-bearded-man-in-eyeglasses-squeezing-lips.jpg?s=612x612&w=0&k=20&c=gGQYBmqwiVoOTJWPdEC8bbv3R_M5lkl9Rs8a3zEhTQs='
                    alt="Team Member"
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
                <Col md={7} className="d-flex align-items-center">
                  <Card.Body>
                    <Card.Title as="h5" className="font-weight-bold mb-2">Sarah Johnson</Card.Title>
                    <Card.Text className="text-muted">
                      We provide a great experience with our amazing features and customer services.
                    </Card.Text>
                    <div className="d-flex justify-content-start">
                      <a href="#" className="text-muted me-3"><i className="bi bi-facebook fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-twitter fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-instagram fs-4"></i></a>
                      <a href="#" className="text-muted me-3"><i className="bi bi-behance fs-4"></i></a>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Team;
