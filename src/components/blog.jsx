import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../css/image.png'; // Correctly import the image
import styles from '../css/Blog.module.css';
import styless from '../css/Hero.module.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 200 });
  }, []);

  return (
    <>
      <div className={styles.BlogSection}>
        <Container>
          <div className={styless.hero_text} data-aos="fade-in">
            <h1>Find Real-time Gold Prices</h1>
            <p className="text-dark">
              Stay informed with the latest gold <br />
              prices in Pakistan, updated in real-time to help <br />
              you make informed decisions.
            </p>
          </div>
          <Row className="justify-content-center">
            {[...Array(6)].map((_, index) => (
              <Col md={4} lg={3} key={index} className="mb-4">
                <Card className="h-100" data-aos="fade-in" data-aos-delay={`${index * 100}`}>
                  {/* Use the imported image variable here */}
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Card Title {index + 1}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="warning">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <button className={styles.btn_blog}>Blog</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Blog;
