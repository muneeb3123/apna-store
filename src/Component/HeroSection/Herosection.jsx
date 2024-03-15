import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import asa from '../../assets/Nav-images/asa.webp';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Herosection = () => {
  return (
    <div>
        <Swiper
        slidesPerView={1}
        effect='fade-in'
        navigation={true}
        autoplay={{
            delay: 3700,
            disableOnInteraction: false,
          }}
        pagination={ {clickable:true} }
        modules={[Pagination,Navigation, Autoplay]}
        >
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        <SwiperSlide ><img className='w-screen h-[68vh]' src={asa} alt="asa" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Herosection
