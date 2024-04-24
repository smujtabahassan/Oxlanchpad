import {React, useState} from 'react'
import { Link } from 'react-router-dom'; 
import bgpic from "../assets/bgshapes.svg";
import bgpicsecound from "../assets/bgshape2.svg";
import kuckcoin from "../assets/kucoin.png";
import Gate from "../assets/gate.png";
import huboi from "../assets/huobi.png";
import bybit from "../assets/bybit.png";
import pancake from "../assets/pancake.png";

import { Slidercomponent } from './Slidercomponent';
import { CompletedProjects } from './CompletedProjects';
import { Frequentlyask } from './Frequentlyask';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import { Infrastructure } from './Infrastructure';
import { FaTelegram,FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { TokenLanchpad } from './TokenLanchpad';

export const LandingPage = () => {

const data=[
  {img:kuckcoin,
  },{img:Gate ,
  },{img:huboi,
  },
  
  {img:bybit,
  }
  ,{img:pancake
  },
  

];


  return (
    <div>


<header>
<Navbar/>

</header>

 <main className=" relative w-full  opacity-90  " >
<img src={bgpic} alt="here  " className='absolute  top-0 -z-10' />
<img src={bgpicsecound} alt="here"  className='lg:block hidden  right-0 absolute top-0 -z-10'/>



<div className='   md:text-[43px] sm:text-[20px] text-[10px] text-center   font-medium space-y-4   pt-32 md:pt-24'>
  <h1 className='  font-bold text-[30px]  md:text-[60px]'>Join Best Web3 Gaming 
  </h1> 
  <h1 className=' font-semibold text-[20px] md:text-[50px] bg-gradient-to-b text-transparent bg-clip-text igos from-[#0400DB] from-30% to-[#CD05FF] to-70%'>IGOs With 0Xgaming</h1>
 

  <div
    
   className='flex flex-row   mx-auto w-fit'>
    
    <button className={`cursor-pointer    sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75   h-[42px] mr-2  bg-gradient-to-b from-[#0400DB]    to-[#CD05FF]      text-[15px] font-bold   gap-2.5 p-2.5  lg:w-[178.81px] w-[2.375rem]  rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>      <Link to="" className="link-to-dashboard  lg:text-[14px] text-[6px]">Connect Wallet</Link>
</button>
    

<button className={`cursor-pointer   flex justify-center items-center    h-[42px] mr-2  bg-[#cdcccc]  hover:scale-125 transition-all ease-linear delay-75       gap-2.5 p-2.5  lg:w-[178.81px] w-[2.375rem]  rounded-tl-[1.25rem] font-bold   shadow-inner rounded-br-[1.25rem] text-black text-[15px] `}>      <Link to="" className="link-to-dashboard  lg:text-[14px] text-[6px]">Connect Wallet</Link>
</button>



  </div>
<div className='px-4 space-y-4' >  
<h1 className='text-[20px]  font-bold mt-20'>AVAILABLE ON:</h1>


<div className='  relative flex sm:flex-row flex-col     justify-center border-2 items-center sm:gap-8   md:mx-auto  bg-gradient-to-r from-[#DF00F2]    to-[#0038FD]    w-full md:w-fit text-[15px] font-bold   gap-2.5 p-2.5    rounded-tl-[1.25rem] rounded-br-[1.25rem] '>

{data.map((data,index)=>{return(


<>
<img src={data.img} className=' md:w-20 w-10  hover:scale-75 transition-all ease-linear delay-75' alt="" />

</>
)})}


</div>

</div>


</div>

<div className='  sm:mt-[-360px] mt-[80px] sm:mr-2 ml-1 flex flex-row sm:flex-col    sm:float-end float-center justify-center  border-2 items-center sm:gap-8     bg-gradient-to-b from-[#0038FD]    to-[#DF00F2]    w-auto md:w-fit text-[15px] font-bold   gap-2.5 p-3.5 p-6   rounded-xl '>

<FaTelegram className='hover:scale-75 transition-all ease-linear delay-75' />
<FaDiscord className='hover:scale-75 transition-all ease-linear delay-75'/>
<AiFillTwitterCircle className='hover:scale-75 transition-all ease-linear delay-75'/>
<ImLinkedin className='hover:scale-75 transition-all ease-linear delay-75'/>

</div>
<br />
<Infrastructure/>

<Slidercomponent/>

<CompletedProjects/>

<Frequentlyask/>
</main>

<footer><Footer/></footer> 


    </div>
  )
}
