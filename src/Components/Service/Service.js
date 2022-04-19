import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({data}) => {
    const {img, course_name} = data;
  return (
    <div className="mt-5 ms-5 me-5">
      <div>
      <Card>
        <Card.Img style={{height: 300,}} className="w-100" variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Button variant="primary">Add Cart</Button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Service;
