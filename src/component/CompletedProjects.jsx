import React from 'react'
import { Link } from 'react-router-dom'; 

import c1 from  '../assets/c1card.png'
import c2 from  '../assets/c2card.png'
import c3 from  '../assets/c3card.png'
import c4 from  '../assets/c4card.png'
import c5 from  '../assets/c5card.png'
import c6 from  '../assets/c6card.png'

import s3 from  '../assets/maincenter.png'
import batch1 from  '../assets/cardicon1.png'
import batch2 from  '../assets/cardicon2.png'
import batch3 from  '../assets/cardicon3.png'
import batch4 from  '../assets/cardicon4.png'

import rightarrow from  '../assets/rightdirec.png'
import leftarrow from  '../assets/leftdirec.png'
import dots from  '../assets/dots.png'


export const CompletedProjects = () => {

    const data=[{
        
        card1:c1,
    icon:batch1
    
    },{
        
        card1:c2,
    icon:batch2
    
    }  

    ,{
        
        card1:c3,
    icon:batch3
    
    }
    ,{
        
        card1:c4,
    icon:batch4
    
    },{
        
        card1:c5,
    icon:batch4
    
    },{
        
        card1:c6,
    icon:batch4
    
    }


]
  return (
    <div>
    <div className=''>

    <div className='flex flex-col  items-center justify-center  mt-20  p-20  text-[40px] font-bold  '>
    
    <h1 >OUR <span className='bg-gradient-to-b text-transparent bg-clip-text igos from-[#0400DB] from-30% to-[#CD05FF] to-70%'>COMPLETED</span></h1>
    
    <h1 className=''>PROJECTS</h1>

    <div className='grid mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[100%] items-center gap-10' >
{ data.map((items,index)=>{return(

   
    <>
    <div  className=" absolute gradient2 lg:w-[394.236px] md:w-[294.236px] w-[194.236px] opacity-20 lg:h-[360px] md:h-[260px] h-[250px] top-[70%] right-[10%] z-[-10] "></div>
    
    
    <div key={index} className='flex flex-col   gap-5  border-2 sm:w-[90%] w-[auto] rounded-3xl  bg-[#1E1E1E] shadow-inner shadow-[#9629fc] drop-shadow-2xl'>
    <div className=' relative '>
      
      <img src={items.card1} alt="" className='hover:scale-75 transition-all ease-linear delay-150 rounded-3xl' />
    
    <div className='w-[20%] absolute bottom-[-16%] ml-6'><img src={items.icon} alt="" className='' /></div>
    </div>
    
    <div className=' flex items-center ml-[4%]  md:gap-14 sm:gap-12 gap-2 lg:text-[14px] text-[8px] mt-4 '>
    <h3>CryotoEmpire:Match3-battle</h3>

    <button className={`cursor-pointer    sm:flex flex-col  justify-center items-center  hover:scale-75 transition-all ease-linear delay-75    mr-2  bg-black   text-[15px] font-bold   gap-2.5 p-2.5  lg:w-[108.81px] w-[1.375rem]  rounded-tl-[1.25rem] rounded-br-[1.25rem] `}>      <Link to="" className="link-to-dashboard  lg:text-[14px] text-[6px]">125 usd</Link>
    </button>
    
    </div>
    
    
    
    <div className='flex flex-col gap-2'>
    <div className=''><p className='lg:text-[16px] text-[8px]  ml-5 text-[#BEB4B4] '>Total Raised </p>
    </div>
    
        <div className='flex items-center justify-between sm:gap-10 gap-2     lg:text-[12px] text-[8px] font-semibold sm:w-[90%] w-[100%] mx-auto rounded-xl  '>
    
    
    
       <div><h1 className=' text-nowrap text-[#BEB4B4]'>51000 USD  <span className='text-[8px]'>FILLED</span></h1>
       </div>
    
      <div className='flex  mr-4 text-[#BEB4B4]'> 
       <h1 className='sm:text-nowrap wrap'>LIMITED PARTICIPANTS:</h1>  
         <p className=''>712</p>
     </div> 
     
 

     
     </div>

    
     
     <div className='flex items-center sm:justify-between justify-center   lg:text-[16px] text-[6px]     sm:w-[90%] w-[100%] mx-auto rounded-xl  '>
    
    
    
    <div><h1 className='  text-[#BEB4B4]'>Progress <span className='text-[8px]'>100%</span></h1>
    </div>
    <div className='  sm:w-[50%] w-[20%]'>
  <div className='bg-gradient-to-r from-[#CD05FF]    to-[#0400DB] h-2 flex-grow'></div>
</div>
  
  
  </div>
    
     </div>
     
    
    </div>
    </>
)})
    
    
    }

</div>
<div className='flex justify-center mt-20 w-[50%]  '>

<button className="hover:scale-110 transition-all ease-linear  pt-[0.4375rem] pb-[0.4375rem]  rounded-[0.625rem] md:w-[40%] w-[90%]  bg-gradient-to-b to-[#eb68ed] from-[#2f22dd]   text-black text-center font-['Helvetica'] lg:text-[.9375rem] text-[.3375rem] font-bold ">
 View All 
</button>

</div>
{/*     
    <div className='flex w-[40%] items-center gap-4 justify-center mt-10' >
    <div className='hover:scale-110 transition-all ease-linear delay-100 '>
    <img src={leftarrow} alt="" />
    </div>
    <div className=''>
    <img src={dots} alt="" className='' />
    </div>
    <div className='hover:scale-110 transition-all ease-linear delay-100'>
      <img src={rightarrow} alt="" />
      </div> 
       </div> */}
     </div>
    
    </div>
    
    
    
        </div>
  )
}
