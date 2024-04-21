import React from 'react'
import Faqboy from "../assets/boyfaq.png"
import { TiArrowSortedUp } from "react-icons/ti";
export const Frequentlyask = () => {
const data=[
    
    {head:"Platform for games",
descriptiion:"owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review."}
,
{head:"Sdk for games",
descriptiion:"owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review."}
,{head:"Web3 social app",
descriptiion:"owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review."}
,
{head:"Multi-chain launchpad",
descriptiion:"owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review."}
,
{head:"Gaming Studio",
descriptiion:"owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review."}
]


  return (
    <div className='flex flex-col items-center text-[40px] font-bold '>



<h1 >Frequently Asked</h1>
    
    <h1 className='font-bold bg-gradient-to-b text-transparent bg-clip-text igos from-[#5776cd] from-30% to-[#CD05FF] to-70%'>PROJECTS</h1>

<div className='flex  justify-center  border-2'>
   
   
    <div className='w-[20%] mr-[5%]' >
    <img src={Faqboy} alt="" /> </div>


<div className='flex-col space-y-2 text-[20px] mt-4 p-10 '>
{  data.map((items,index)=>{return( 
    <>
    <div className='flex '>
<button key={index} className="p-10 gap-2.5 pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[100%] w-[30%] border-2 border-[#db00c9] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.6375rem] text-[.3375rem] font-bold ">
<div className='flex justify-center ' ><TiArrowSortedUp   />
</div>
  {items.head }
</button>

</div>
<p></p>


</>

)})

}

</div>

</div>


    </div>
 )
}
