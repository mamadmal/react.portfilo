// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import masihaImage from '../../assets/masiha.png'
import sandogh from '../../assets/sandogh.jpg'

export const ResumeSlider = ()=>{


  const resumeArray = [
    {
      title : "آکادمی مسیحا",
      desc : "سایت مشاوره تحصیلی و اتنخاب رشته مسیحا",
      img : masihaImage
    },
    {
      title : "صندوق",
      desc : "سایت حسابداری اجراشده در شبکه خصوصی",
      img : sandogh
    },

  ]


  const resumeElements = resumeArray.map((slide, index) => (
    
    <SwiperSlide  key={index}>
      <img src={slide.img} className="object-cover" />
      <a href="https://masihaacademy.ir/" target="_blank">
        <div class="text-[#1F4172] txt-shadoww text-center absolute top-1/2 md:top-[60%] left-1/2 translate-x-[-50%] center-divMain p-1 md:p-3 md:text-4xl text-sm md:hover:scale-125 cursor-pointer ease-in duration-300">
            <h1 class="font-bold"> {slide.title}</h1>
            <span class="md:text-xl">{slide.desc}</span>
        </div>
      </a>
    </SwiperSlide>
  ));


    return(
      
        <section dir='ltr' className=''>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      
      navigation
      height={300}
      
      autoplay
      scrollbar={{ draggable: true }}
      
    >

     
          <div>
            {resumeElements}
          </div>
    
     
    </Swiper>
    </section>
  );
    
} 
