import React from "react";
import "../style/FlashHour.css";
import smartwatch from "../assets/smartwatch.jpg";
import backpack from "../assets/backpack.jpg";



const FlashHour = () => {
  return (
    <div className="container pt-20">
      <div className="row">
        
        <div className="col-md-6">
          <div className="image-container">
            <img src={smartwatch} alt="Image 1" className="img-fluid" />
            <div className="text-overlay">
              <h3>Spring Selection</h3>
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>

 
        <div className="col-md-6">
          <div className="image-container">
            <img src={backpack} alt="Image 2" className="img-fluid" />
            <div className="text-overlay">
              <h3>40% Discount</h3>
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashHour;
