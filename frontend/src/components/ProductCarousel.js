import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <Image src="https://i.ibb.co/GdVp5Ng/7.jpg" alt="companylogo" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/fq11p9K/Whats-App-Image-2021-01-11-at-10-26-48-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/tB9D4HR/Whats-App-Image-2021-01-11-at-10-26-54-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/bN7jqqj/Whats-App-Image-2021-01-11-at-10-26-53-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/Lh0xSpf/Whats-App-Image-2021-01-11-at-10-26-52-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/GvM5hXY/Whats-App-Image-2021-01-11-at-10-26-51-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/zbbB258/Whats-App-Image-2021-01-11-at-10-26-50-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/jDdWNHM/Whats-App-Image-2021-01-11-at-10-26-49-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/VL3fKKp/Whats-App-Image-2021-01-11-at-10-26-47-PM.jpg" alt="img" fluid />
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://i.ibb.co/PMnx0R9/Whats-App-Image-2021-01-11-at-10-26-55-PM.jpg" alt="img" fluid />
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
