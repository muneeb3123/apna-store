import React from 'react';
import { Cards } from './Cards/Cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/mens-collection/img1.webp'
import image from '../assets/mens-collection/image1.jpg'
import image2 from '../assets/mens-collection/slider1.jpg'
import image3 from '../assets/mens-collection/slider2.jpg'
import image4 from '../assets/mens-collection/slider3.jpg'
import image5 from '../assets/mens-collection/slider4.jpg'
// import image6 from '../assets/mens-collection/slider5'
import image7 from '../assets/mens-collection/slider6.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const Productslider = () => {
  const sliderData = [{ description: 'Latest in Men', img: image1, price: 1000 },{ description: 'Latest in Men', img: image2, price: 1000 },{ description: 'Latest in Men', img: image3, price: 1000 },{ description: 'Latest in Men', img: image4, price: 1000 },{ description: 'Latest in Men', img: image5, price: 1000 },{ description: 'Latest in Men', img: image2, price: 1000 },{ description: 'Latest in Men', img: image7, price: 1000 },{ description: 'Latest in Men', img: image1, price: 1000 }];

  return (
    <>
      <div className='slider'>
        <div className='slider-heading'>
          <h2>Latest in Men's Fashion</h2>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
          slidesPerView={5}
          spaceBetween={20}
        >
          {sliderData.map((data, index) => (
            <SwiperSlide key={index}>
              <Cards data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </>
  );
};
