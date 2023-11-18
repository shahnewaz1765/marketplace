import React from "react";
import "../style/Hero.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

function Hero() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 aspect-ratio-img"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 aspect-ratio-img"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 aspect-ratio-img"
            src={slide3}
            alt="third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 aspect-ratio-img"
            src={slide4}
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 aspect-ratio-img"
            src={slide5}
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
