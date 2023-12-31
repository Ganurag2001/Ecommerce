import React from "react";
import Carousel from "react-bootstrap/Carousel";

const SliderDemo = () => {
  return (
    <>
      <div>
        <Carousel style={{ width: '60%', margin: 'auto' }}>
          <Carousel.Item interval={2000}>
            <img src="https://picsum.photos/id/231/400/300" alt="NoImage"/>
            <Carousel.Caption>
              <h3>Buy</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src="https://picsum.photos/id/235/400/300" alt="NoImage"/>
            <Carousel.Caption>
              <h3>For</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img src="https://picsum.photos/id/237/400/300" alt="NoImage"/>
            <Carousel.Caption>
              <h3>You</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default SliderDemo;
