import {React, useState} from 'react'
import { Link } from 'react-router-dom'; 
import bgpic from "../assets/bgshapes.svg";
import bgpicsecound from "../assets/bgshape2.svg";
import kuckcoin from "../assets/kucoin.png";
import Gate from "../assets/gate.png";
import huboi from "../assets/huobi.png";
import bybit from "../assets/bybit.png";
import pancake from "../assets/pancake.png";

import { Infrastructure } from './Infrastructure';
import { FaTelegram,FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Slidercomponent } from './Slidercomponent';
import { CompletedProjects } from './CompletedProjects';
import { Frequentlyask } from './Frequentlyask';
import { Footer } from './Footer';


export const LandingPage = () => {

    const [toogle, settoogle] = useState(false);
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
<nav
  className="flex flex-col justify-between items-center md:flex-row lg:gap-10 gap-3    text-white relative md:h-[100px] h-[auto]   h-16 w-auto opacity-90 shadow-md   "
>
  <div className='flex items-center justify-between w-full px-6 md:w-fit   '>
<div>
  
</div>

  <h1 className="lg:text-[40px] text-[20px] md:left-auto left-0  ">
  OxLaunchpad
  </h1>

  <button
    className={`menu  md:hidden `}
    onClick={() => settoogle(!toogle)}
    >
    {toogle ? <span>&times;</span> : <span>&#9776;</span>}
  </button>
    </div>
    
    
  
  <ul
    className={` md:flex hidden xl:gap-20 lg:gap-1 gap-2 items-center    lg:text-[16px] text-[10px] lg:p-3 p-2 rounded-full    md:flex-row flex-col    text-center  cursor-pointer   bg-[#353337] bg-opacity-100  `}
  >
 
    

  <a href="https://web.telegram.org/">  <li className="  hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]  hover:shadow-md    gap-2.5 p-2.5 p-2 w-[5.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Home</li></a>
 <a href="https://web.telegram.org/" > <li className=" hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]     hover:shadow-md gap-2.5 p-2.5 p-2  w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Nft_Launchpad</li></a>
<a href="https://twitter.com/i/flow/signup" > <li className="  hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]     hover:shadow-md    gap-2.5 p-2.5 p-2 w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Stake/Farm</li></a>
 <a href="https://dappradar.com/" > <li className=" hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]     hover:shadow-md    gap-2.5 p-2.5 p-2 w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Claims</li></a>

  </ul>




  <div
    className={`cursor-pointer hidden   md:flex justify-center items-center    h-14 mr-2  bg-gradient-to-b from-[#0400DB]    to-[#CD05FF]         gap-2.5 p-2.5  lg:w-[10.375rem] w-[2.375rem]  rounded-tl-[1.25rem] rounded-br-[1.25rem] `}
  >
    
    <button>      <Link to="" className="link-to-dashboard  lg:text-[14px] text-[6px]">Connect Wallet</Link>
</button>
    


  </div>



  <ul
    className={`${
      toogle
        ? "flex  md:justify-around  lg:text-[16px] text-[10px]  w-[auto] md:gap-12 gap-1 md:flex-row flex-col    md:bg-transparent  cursor-pointer  "
        : "hidden"
    }`}
  >
    

   <a href="https://web.telegram.org/">  <li className="hover:text-green-400 ">Docs</li></a>
   <a href="https://web.telegram.org/" > <li className="hover:text-green-400 ">Telegram</li></a>
   <a href="https://twitter.com/i/flow/signup" > <li className="hover:text-green-400 ">Twitter</li></a>
   <a href="https://dappradar.com/" > <li className="hover:text-green-400 ">Staking Dapp</li></a>
  </ul>
  

  <div
    className={` ${
      toogle
        ? " cursor-pointer  flex justify-center items-center flex-grow-0 flex-shrink-0 sm:w-[150px] w-[130px] sm:h-[18px] h-[41px] relative gap-3  rounded-[30px] bg-[#0B0121] border-2 p-4 m-1 "
        : "hidden"
    }`}
  >
    
    <p className=" flex-grow-0 flex-shrink-0 text-base text-center  text-transparent bg-clip-text bg-gradient-to-r from-green-600 from-50%  via-green-700/100 to-green-600 to-80%    ">
      <Link to="" className="link-to-dashboard text-center sm:text-sm text-xs">Connect Wallet</Link>
    </p>
  </div>

</nav>

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
