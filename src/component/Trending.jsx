import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import "../style/Trending.css";

const ItemsList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/655cf4a30574da7622c9d943", {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$zSfnv/AyDOwB/AwUdj7hf.awX.XiL7M7e1OFPfwb1uskDwAaMOGtW",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data.record);
  }, []);

  if (!data.record) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="trending px-5 ">
      
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.record.map((item) => (
          <Col key={item.id}>
            <Card className="h-100 d-flex flex-column">
                <div className="aspect-ratio">
              <Card.Img
                
                src={item.img_url}
                className="card-image img-fluid"
            
              />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
   </div>
  );
};

export default ItemsList;
