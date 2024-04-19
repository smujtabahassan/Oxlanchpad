import React from 'react'
import { Link } from 'react-router-dom'; 

import card1 from '../assets/c1.png';
import card2 from '../assets/c2.png';
import card3 from '../assets/c3.png';
import card4 from '../assets/c4.png';
import card5 from '../assets/c5.png';
import card6 from '../assets/c6.png';
import card7 from '../assets/c7.png';

export const Infrastructure = () => {
  return (
    <div> 
        
        <div className='  flex  flex-col items-center justify-center p-7  gap-4 h-auto sm:mt-[240px] mt-[140px]'><h1 className='sm:text-[40px] text-[20px] font-bold'>Infrastructure:Web 3 Gamming</h1>
        
        <p className='max-w-[850px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Possimus sapiente cum temporibus recusandae commodi atque excepturi officia </p>

<div className='relative grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   gap-4 ' >

  
<div className=' relative  sm:row-span-2 row-span-1 hover:scale-90 transition-all ease-linear delay-75'>
<img src={card1} alt="" className='   w-fit h-[100%]'  />  
<div className='absolute ml-2 top-20'>
  
<button className={` cursor-pointer   border-2 border-blue-500    hover:scale-75 transition-all ease-linear delay-75   md:h-[42px] h-[55px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[155.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>      <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[14px]">ENTER PLATFORM</Link>
</button>
    
   </div>

</div>


<div className='relative hover:scale-90 transition-all ease-linear delay-75'>



<img src={card2} alt="" className='' />  
<div className='absolute ml-2 top-20'>
  
<button className={` cursor-pointer   border-2 border-blue-500  sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[185.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>      <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[4px] "></Link>Trade Gamming NFTs
</button>
    
   </div>

</div>

<div className='relative hover:scale-75 transition-all ease-linear delay-75'>
<img src={card3} alt="" />  
<div className='absolute ml-2   md:top-16 sm:top-10 top-14' >
  
<button className={` cursor-pointer   border-2 border-blue-500  sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[185.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>  
    <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[4px] "></Link>REGISTER NOW
</button>
    
   </div>


</div>

<div className='relative  hover:scale-75 transition-all ease-linear delay-75'>
<img src={card4} alt="" />  

<div className='absolute ml-2 md:top-20 sm:top-10 top-20'>
  
<button className={` cursor-pointer   border-2 border-blue-500  sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[185.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>  
    <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[4px] "></Link>SWAP NOW
</button>
    
   </div>


</div>



<div className=' relative hover:scale-75 transition-all ease-linear delay-75  '>
<img src={card5} alt="" />  

<div className='absolute ml-2 sm:top-20 top-10 '>
  
  <button className={` cursor-pointer   border-2 border-blue-500  sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[185.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>  
      <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[4px] "></Link>VIEW PROJECT
  </button>
      
     </div>
  


</div>


<div className='sm:col-span-2 col-span-0  relative hover:scale-90 transition-all ease-linear delay-75'>
<img src={card6} alt="" />  
<div className='absolute ml-2 sm:top-20 top-10'>
  
  <button className={` cursor-pointer   border-2 border-blue-500  sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[185.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>  
      <Link to="" className="link-to-dashboard  lg:text-[14px] sm:text-[4px] "></Link>READ WHITEPAPER
  </button>
      
     </div>
  


</div>

<div className='relative  hover:scale-90 transition-all ease-linear delay-75'>

<img src={card7} alt="" />  


<div className='absolute ml-2 lg:top-24 md:top-10 sm:top-26 top-20'>
  
  <button className={` cursor-pointer   border-2 border-blue-500    hover:scale-75 transition-all ease-linear delay-75   h-[58px] ml-2  bg-[#1C1D23]         gap-2.5 p-2.5  w-[195.81px]   rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>  
      <Link to="" className="link-to-dashboard  md:text-[14px] sm:text-[10px] "></Link>JOIN OUR DISCORD FIRST
  </button>
      
     </div>

</div>




</div>


        </div>
        </div>
        
  )
}
