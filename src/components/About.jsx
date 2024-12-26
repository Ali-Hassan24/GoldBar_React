import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 200 });
  }, []);

  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col>
            <h1 data-aos="fade-up">About Gold Bar</h1>
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ipsum nam nihil, at quod quis dolorum error laborum consequuntur repudiandae eos suscipit earum, itaque magnam. Voluptate possimus inventore ullam molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo blanditiis magni perferendis magnam quia earum facere numquam. Nesciunt, temporibus?
            </p>
          </Col>
          <Col>
            <div data-aos="fade-up" data-aos-delay="200" className='d-flex'>
              <div>
                <i className="bi bi-globe" style={{ fontSize: '40px', color: '#edd609' }}></i>
              </div>
              <div className='ms-5'>
                <h2>Home Security</h2>
                <p>The customer is very important, the customer will be followed by the customer. The course of the course, the lake at fringilla lacinia leo eleifend.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className='d-flex'>
              <div>
                <i className="bi bi-mortarboard-fill" style={{ fontSize: '40px', color: '#edd609' }}></i>
              </div>
              <div className='ms-5'>
                <h2>Office Security</h2>
                <p>The customer is very important, the customer will be followed by the customer. The course of the course, the lake at fringilla lacinia leo eleifend.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='d-flex'>
              <div>
                <i className="bi bi-rocket-takeoff-fill" style={{ fontSize: '40px', color: '#edd609' }}></i>
              </div>
              <div className='ms-5'>
                <h2>CCTV Cameras</h2>
                <p>The customer is very important, the customer will be followed by the customer. The course of the course, the lake at fringilla lacinia leo eleifend.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
