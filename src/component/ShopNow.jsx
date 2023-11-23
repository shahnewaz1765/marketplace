import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import shopnow1 from '../assets/shopnow1.jpg';
import shopnow2 from '../assets/shopnow2.jpg';
import shopnow3 from '../assets/shopnow3.jpg';
import shopnow4 from '../assets/shopnow4.jpg';

const shuffleArray = (array) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const ImageSection = ({ gender }) => {
  const images = gender === 'men' ? shuffleArray([shopnow1, shopnow2]) : shuffleArray([shopnow3, shopnow4]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const switchImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(switchImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const cardStyle = {
    height: '600px', // Set a fixed height for the Card
    
  };

  const imageStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'cover', // Maintain aspect ratio and fill container
  };

  return (
    <Card style={cardStyle} >
      <div className="position-relative" style={{ height: '100%' }}>
        <Card.Img
          variant="top"
          src={images[currentImageIndex]}
          style={imageStyle}
          
        />
      </div>
      <Card.Body style={{ height: '0%' }}>
        <Card.Title>{gender === 'men' ? 'Men' : 'Women'}</Card.Title>
        <Card.Text>Image description.</Card.Text>
        <Button href="#" variant="primary">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const ImageSections = () => {
  return (
    <div className='shopnow'>
    <Container >
      <Row>
        <Col md={6}>
          <ImageSection gender="men" />
        </Col>
        <Col md={6}>
          <ImageSection gender="women" />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ImageSections;

