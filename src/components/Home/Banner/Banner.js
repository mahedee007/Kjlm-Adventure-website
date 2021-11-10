import React from 'react';

import { Carousel } from 'react-bootstrap';

import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";



const Banner = () => {
    return (
        <>
           <Carousel id="home" fade>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='carusol-title'>Get Appointment</h1>
      <p className='carusol-description'>At E-sheba, over 50 doctors across 20 specialties are ready to care for you..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className='carusol-title'>Talk To A Doctor</h1>
      <p className='carusol-description'>E-sheba now offer video consults with our doctor</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1 className='carusol-title'>Get Medicines</h1>
      <p className='carusol-description'>E-sheba phermacy is now online and delivers accross Bangladesh.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;