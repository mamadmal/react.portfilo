// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import masihaImage from '../../assets/masiha.png'
export const ResumeSlider = ()=>{

    return(
        <section dir='ltr' className=''>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      height={400}
      
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      
    >
      <SwiperSlide>
                <img src={masihaImage} class="object-cover" />
                <a href="https://masihaacademy.ir/" target="_blank">
                <div class="text-[#1F4172] txt-shadoww text-center absolute top-1/2 md:top-[60%] left-1/2 translate-x-[-50%] center-divMain p-1 md:p-3 md:text-4xl text-sm md:hover:scale-125 cursor-pointer ease-in duration-300">
                    <h1 class="font-bold">آکادمی مسیحا</h1>
                    <span class="md:text-xl">سایت مشاوره تحصیلی و اتنخاب رشته مسیحا</span>
                </div>
                </a>
      </SwiperSlide>


      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
     
    </Swiper>
    </section>
  );
    
} 
