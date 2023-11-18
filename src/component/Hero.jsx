import React from "react";
import "../style/Hero.css";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

function Hero() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={pic1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={pic2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="third slide"
          />
          </Carousel.Item>
       
      </Carousel>
    </div>
  );
}

export default Hero;
