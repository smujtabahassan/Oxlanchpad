import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import s1 from  '../assets/cover1.png'
import s2 from  '../assets/cover2.png'
import s3 from  '../assets/maincenter.png'
import batch from  '../assets/image_3.png'
import usdticon from  '../assets/usdt.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './StyleSlider.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
  
  <img src={s2} alt="" className='hover:scale-75 transition-all ease-linear delay-150' />

<div className='w-[20%] absolute bottom-4 ml-6'><img src={batch} alt="" className='' /></div>

<div >
<h2 className='sm:text-[20px] text-[8px] ml-[2%]'>HAVENS COMPASS(PUBLIC)</h2>
</div>

<div className=' flex ml-[1%] gap-10 '>
<button className="inline-flex ml-2 justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] w-[30%] border-2 border-[#db00c9] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.9375rem] text-[.3375rem] font-bold ">
  UPCOMMING
</button>
<button className="inline-flex justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] w-[30%] border-2 border-[#db00c9] bg-[#FFFFFF] text-black text-center font-['Helvetica'] lg:text-[.9375rem] text-[.3375rem] font-bold ">
 REFUNDABLE
</button>

</div>

<div><p className='md:text-[14px] text-[10px] ml-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></div>


<div className='flex items-center  sm:gap-10 gap-4 sm:w-[90%] w-[100%] mx-auto rounded-xl bg-black p-2  '>

<div><h1 className=' lg:text-[20px] text-[8px] text-nowrap'>TARGETED RAISE </h1>
</div>

 <div className=' flex items-center  justify-center gap-2 '><img src={usdticon} alt="" className='w-[20%] ' /> 
 <span className='lg:text-[30px] text-[8px]'>USDT</span>  
 </div> <p className='lg:text-[30px] text-[10px]'>0</p>  </div>

<div className='flex flex-col'>
    <div className='flex items-center justify-between   lg:text-[12px] text-[8px] font-semibold sm:w-[90%] w-[100%] mx-auto rounded-xl p-2 '>

   <div><h1 className='  text-nowrap'>TOKEN PRICE </h1>
   </div>

  <div className='flex gap-4 '> 
   <h1 className=''>0.015</h1>  
     <p className=''>USDT</p>
 </div> 
 
 
 </div>
 
<div><h3 className=''>Type </h3>
</div>


<div><h1 className='  text-nowrap'>TOKEN PRICE </h1>
</div>

 </div>
 
</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
