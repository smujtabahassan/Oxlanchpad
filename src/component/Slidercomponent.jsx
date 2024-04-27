import React from 'react'
import s1 from  '../assets/cover1.png'
import s2 from  '../assets/cover2.png'
import s3 from  '../assets/maincenter.png'
import batch from  '../assets/image_3.png'
import usdticon from  '../assets/usdt.png'
import rightarrow from  '../assets/rightdirec.png'
import leftarrow from  '../assets/leftdirec.png'
import dots from  '../assets/dots.png'

import "../App.css"
export const Slidercomponent = () => {
  return (
    <div>
<div className=''>

<div className='flex flex-col  items-center justify-center  mt-20  p-20  text-[40px] font-bold  '>

<h1 >OUR <span className='bg-gradient-to-b text-transparent bg-clip-text igos from-[#0400DB] from-30% to-[#CD05FF] to-70%'>UPCOMMING</span></h1>

<h1 className=''>PROJECTS</h1>
<div className='flex lg:flex-row flex-col items-center gap-10'>
<div className='flex flex-col rounded-xl  gap-5  p-2 sm:w-[40%] w-[100%]  bg-[#1E1E1E] shadow-inner shadow-[#9629fc] drop-shadow-2xl'>
<div className=' relative '>
  
  <img src={s2} alt="" className='hover:scale-75 transition-all ease-linear delay-150 rounded-2xl' />

<div className='w-[20%] absolute bottom-4 ml-6'><img src={batch} alt="" className='' /></div>
</div>
<div >
<h2 className='sm:text-[20px] text-[10px] ml-[2%]'>HAVENS COMPASS(PUBLIC)</h2>
</div>

<div className=' flex ml-[1%] gap-10 '>
<button className="inline-flex ml-2 justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[40%] w-[100%] border-2 border-[#db00c9] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  UPCOMMING
</button>
<button className="inline-flex justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[40%] w-[100%] border-2 border-[#db00c9] bg-[#FFFFFF] text-black text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
 REFUNDABLE
</button>

</div>

<div><p className='md:text-[14px] text-[10px] ml-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></div>


<div className='flex items-center  sm:gap-2 gap-2 sm:w-[90%] w-[100%] mx-auto rounded-xl bg-black p-2  '>

<div><h1 className=' lg:text-[16px] sm:text-[6px] text-[10px] text-nowrap'>TARGETED RAISE </h1>
</div>

 <div className=' flex items-center  justify-center  gap-2 '><img src={usdticon} alt="" className='md:w-[20%] w-[10%] ' /> 
 <span className='lg:text-[16px] sm:text-[8px] text-[10px]'>USDT</span>  
 </div> <p className='lg:text-[16px] sm:text-[8px] text-[10px]'>0</p>  </div>

<div className='flex flex-col gap-2'>
    <div className='flex items-center justify-between   lg:text-[12px] text-[10px] font-semibold sm:w-[90%] w-[100%] mx-auto rounded-xl  '>

   <div><h1 className=' text-nowrap'>TOKEN PRICE </h1>
   </div>

  <div className='flex gap-4 '> 
   <h1 className=''>0.015</h1>  
     <p className=''>USDT</p>
 </div> 
 
 
 </div>
 
<div className=''><p className='lg:text-[12px] text-[10px]  ml-5 text-[#474847] '>Type </p>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>PUBLIC</h1>
</div>



<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#474847]'>REGISTER PERIOD (FROM) </h1>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>TBA</h1>
</div>



<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#474847]'>REGISTER PERIOD (TO)</h1>
</div>


<div><h1 className='lg:text-[12px] text-[8px]  ml-5  lg:text-[12px] text-[8px] font-semibold   text-nowrap'>TBA</h1>
</div>
<div className='flex items-center justify-center'>
 <button className="   gap-2.5 pt-[0.4375rem] pb-[0.4375rem] text-center rounded-[0.625rem] w-[80%] border-2 border-[#db00c9] bg-[#121314] text-white  font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  Connect Wallet
</button>

</div>

<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#848584]'>REGISTRATION STARTS IN</h1>
</div>


 </div>
 
</div>
<div className='flex flex-col rounded-xl  gap-5  p-2 lg:w-[60%] md:w-[40%] sm:w-[80%] w-[100%]  bg-[#1E1E1E] shadow-inner shadow-[#9629fc] drop-shadow-2xl'>
<div className=' relative'>
  
  <img src={s3} alt="" className='hover:scale-75 transition-all ease-linear delay-150' />

<div className='w-[20%] absolute bottom-4 ml-6'><img src={batch} alt="" className='' /></div>
</div>
<div >
<h2 className='sm:text-[20px] text-[10px] ml-[2%]'>HAVENS COMPASS(PUBLIC)</h2>
</div>

<div className=' flex ml-[1%] gap-10 '>
<button className="inline-flex ml-2 justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] sm:w-[40%] w-[100%] border-2 border-[#db00c9] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  UPCOMMING
</button>
<button className="inline-flex justify-center items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] sm:w-[40%] w-[100%] border-2 border-[#db00c9] bg-[#FFFFFF] text-black text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
 REFUNDABLE
</button>

</div>

<div><p className='md:text-[14px] text-[10px] ml-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></div>


<div className='flex items-center  sm:gap-2 gap-2 sm:w-[90%] w-[100%] mx-auto rounded-xl bg-black p-2  '>

<div><h1 className=' lg:text-[16px] sm:text-[6px] text-[10px] text-nowrap'>TARGETED RAISE </h1>
</div>

 <div className=' flex items-center  justify-center gap-2 '><img src={usdticon} alt="" className='md:w-[20%] w-[10%] ' /> 
 <span className='lg:text-[16px] sm:text-[8px] text-[10px]'>USDT</span>  
 </div> <p className='lg:text-[16px] sm:text-[8px] text-[10px]'>0</p>  </div>

<div className='flex flex-col gap-2'>
    <div className='flex items-center justify-between   lg:text-[12px] text-[10px] font-semibold sm:w-[90%] w-[100%] mx-auto rounded-xl  '>

   <div><h1 className=' text-nowrap'>TOKEN PRICE </h1>
   </div>

  <div className='flex gap-4 '> 
   <h1 className=''>0.015</h1>  
     <p className=''>USDT</p>
 </div> 
 
 
 </div>
 
<div className=''><p className='lg:text-[12px] text-[10px]  ml-5 text-[#474847] '>Type </p>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>PUBLIC</h1>
</div>



<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#474847]'>REGISTER PERIOD (FROM) </h1>
</div>


<div><h1 className=' ml-5  lg:text-[12px] text-[10px] font-semibold   text-nowrap'>TBA</h1>
</div>



<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#474847]'>REGISTER PERIOD (TO) </h1>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>TBA</h1>
</div>

<div className='flex items-center justify-center'>
 <button className="   gap-2.5 pt-[0.4375rem] pb-[0.4375rem] text-center rounded-[0.625rem] w-[80%] border-2 border-[#db00c9] bg-[#121314] text-white  font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  Connect Wallet
</button>

</div>

<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#848584]'>REGISTRATION STARTS IN</h1>
</div>

 </div>
 
</div>

<div className=" absolute gradient2 lg:w-[594.236px] md:w-[494.236px] w-[194.236px] lg:h-[660px] md:h-[360px] h-[250px] top-[50%] left-[20%] z-[-10] "></div>


<div className='flex flex-col rounded-xl   gap-5  p-2 sm:w-[40%] w-[100%]  bg-[#1E1E1E] shadow-inner shadow-[#9629fc] drop-shadow-2xl'>
<div className=' relative'>
  
  <img src={s1} alt="" className='hover:scale-75 transition-all ease-linear delay-150' />

<div className='w-[20%] absolute bottom-4 ml-6'><img src={batch} alt="" className='' /></div>
</div>
<div >
<h2 className='sm:text-[20px] text-[10px] ml-[2%]'>HAVENS COMPASS(PUBLIC)</h2>
</div>
<div className=' flex ml-[1%] gap-10 '>
<button className="inline-flex ml-2 justify-center  items-center gap-2.5 pt-[.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[40%] w-[70%] border-2 border-[#db00c9] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  UPCOMMING
</button>
<button className="inline-flex justify-center  items-center gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[40%] w-[70%] border-2 border-[#db00c9] bg-[#FFFFFF] text-black text-center font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
 REFUNDABLE
</button>

</div>

<div><p className='md:text-[14px] text-[10px] ml-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></div>


<div className='flex items-center  sm:gap-2 gap-2 sm:w-[90%] w-[100%] mx-auto rounded-xl bg-black p-2  '>

<div><h1 className=' lg:text-[16px] sm:text-[6px] text-[10px] text-nowrap'>TARGETED RAISE </h1>
</div>

 <div className=' flex items-center  justify-center gap-2 '><img src={usdticon} alt="" className='md:w-[20%] w-[10%] ' /> 
 <span className='lg:text-[16px] sm:text-[8px] text-[10px]'>USDT</span>  
 </div> <p className='lg:text-[16px] sm:text-[8px] text-[10px]'>0</p>  </div>

<div className='flex flex-col gap-2'>
    <div className='flex items-center justify-between   lg:text-[12px] text-[10px] font-semibold sm:w-[90%] w-[100%] mx-auto rounded-xl  '>

   <div><h1 className=' text-nowrap'>TOKEN PRICE </h1>
   </div>

  <div className='flex gap-4 '> 
   <h1 className=''>0.015</h1>  
     <p className=''>USDT</p>
 </div> 
 
 
 </div>
 
<div className=''><p className='lg:text-[12px] text-[10px]  ml-5 text-[#474847] '>Type </p>
</div>


<div><h1 className='  ml-5  lg:text-[12px] text-[10px] font-semibold   text-nowrap'>PUBLIC</h1>
</div>



<div><h1 className=' lg:text-[12px] text-[10px] ml-5 text-[#474847]'>REGISTER PERIOD (FROM) </h1>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>TBA</h1>
</div>



<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#474847]'>REGISTER PERIOD (TO) </h1>
</div>


<div><h1 className='lg:text-[12px] text-[10px]  ml-5   font-semibold   text-nowrap'>TBA</h1>
</div>


 </div>
 <div className='flex items-center justify-center'>
 <button className="   gap-2.5 pt-[0.4375rem] pb-[0.4375rem] text-center rounded-[0.625rem] w-[80%] border-2 border-[#db00c9] bg-[#121314] text-white  font-['Helvetica'] lg:text-[.9375rem] text-[.8375rem] font-bold ">
  Connect Wallet
</button>

</div>

<div><h1 className='lg:text-[12px] text-[10px]  ml-5 text-[#848584]'>REGISTRATION STARTS IN</h1>
</div>


</div>

</div>


<div className='flex w-[20%] items-center gap-4 justify-center mt-10' >
<div className='hover:scale-110 transition-all ease-linear delay-75 '>
<img src={leftarrow} alt="" />
</div>
<div className=''>
<img src={dots} alt="" className='' />
</div>
<div className='hover:scale-110 transition-all ease-linear delay-75'>
  <img src={rightarrow} alt="" />
  </div> 
   </div>
 </div>

</div>



    </div>
  )
}
