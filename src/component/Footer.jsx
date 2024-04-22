import React from 'react'

import { Infrastructure } from './Infrastructure';
import { FaTelegram,FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
export const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
<div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center w-fit md:ml-[190px] ml-[90px] gap-20 mt-20 font-sans py-10 '>


<div className='flex flex-col gap-2'> <h1 className='text-[#EC29FC] text-[50px] font-bold '>0xGame</h1>

<p className='max-w-[55%] text-[#a8b3bedd]'>A well-designed gaming header often incorporates elements such as game characters, 
iconic symbols, vibrant colors, and dynamic visuals .</p>

</div>

<div className='flex flex-col text-[#606162dd] gap-4'>
<h3 className='font-bold text-white'>Company</h3>
<h3>Products</h3>
<h3>Apps & Games</h3>
<h3>Features</h3>
</div>

<div className='flex flex-col gap-4 text-[#606162dd]'>
<h3 className='text-white'>More</h3>
<h3>WhitePaper</h3>
<h3>Github</h3>
<h3>Term of Use</h3>
<h3>Privacy Policy</h3>

</div>
<div className='flex gap-2 '>
<FaTelegram
      className='hover:scale-75 transition-all ease-linear delay-75 text-[#EC29FC]  bg-clip'
      
    />
<FaDiscord className='hover:scale-75 transition-all ease-linear delay-75'/>
<AiFillTwitterCircle className='hover:scale-75 transition-all ease-linear delay-75'/>
<ImLinkedin className='hover:scale-75 transition-all ease-linear delay-75'/>

</div>


</div>
<p className='sm:text-[10px] text-[#8a8a8a] text-[10px] font-bold'>© Copyright 2023, All Rights Reserved by board</p>
</div>
    
  )
}
