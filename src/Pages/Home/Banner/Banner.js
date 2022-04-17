import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner1.jpg'
import banner2 from '../../../img/banner2.jpg'
import banner3 from '../../../img/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
         
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{ height: '80vh' }}
          className="d-block w-100 "
          src={banner3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary'>Happy Wedding </h3>
          <p className='text-primary'>Best Wishing you all of the love and happiness!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: '80vh' }}
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='text-primary'>Happy Wedding </h3>
          <p className='text-primary'>Best Wishing you all of the love and happiness!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: '80vh' }}
          className="d-block w-100"
          src={banner1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='text-primary'>Happy Wedding </h3>
          <p className='text-primary'>Best Wishing you all of the love and happiness!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  




        </div>
    );
};

export default Banner;