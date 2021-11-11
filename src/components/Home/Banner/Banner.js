import React from 'react';

import { Carousel,Container } from 'react-bootstrap';

import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";



const Banner = () => {
    return (
      <>
        <Container>
           <Carousel id="home" fade>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='carusol-title'>Get Your Backpack</h1>
      <p className='carusol-description'>Keep calm and backpack the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className='carusol-title'>Fixed A Map</h1>
      <p className='carusol-description'>Don't be a tourist, be a traveler.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className='carusol-title'>Let's Fly</h1>
      <p className='carusol-description'>Once you have tasted flight, you will forever walk the earth with your eyes turned skyward</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Container>
        </>
    );
};

export default Banner;