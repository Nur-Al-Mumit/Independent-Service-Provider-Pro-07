import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

/*
src="https://manofmany.com/wp-content/uploads/2019/12/Bodyweight-Exercises.jpg"
src="https://www.muscleandfitness.com/wp-content/uploads/2019/04/triceps-pushup-lean-muscular.jpg?quality=86&strip=all"
src="https://media.gq-magazine.co.uk/photos/5d139941bc4bf6f0227f07e9/master/pass/IdoPortal-GQ-17Mar15-pr_b.jpg"
*/

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://manofmany.com/wp-content/uploads/2019/12/Bodyweight-Exercises.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.muscleandfitness.com/wp-content/uploads/2019/04/triceps-pushup-lean-muscular.jpg?quality=86&strip=all"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gq-magazine.co.uk/photos/5d139941bc4bf6f0227f07e9/master/pass/IdoPortal-GQ-17Mar15-pr_b.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;