import React, { useState } from 'react';
import Faqboy from "../assets/boyfaq.png";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import"../App.css";
export const Frequentlyask = () => {
  const [data, setData] = useState([
    { id: 1, head: "Platform for games", description: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.", open: true },
    { id: 2, head: "Sdk for games", description: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.", open: false },
    { id: 3, head: "Web3 social app", description: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.", open: false },
    { id: 4, head: "Multi-chain launchpad", description: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.", open: false },
    { id: 5, head: "Gaming Studio", description: "owned is not another p2e platform. It’s the only platform that puts games & gamers first. find play-to-own games based on user review.", open: false }
  ]);

  const toggleOpen = (id) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      });
    });
  };

  return (
    <div className=' relative flex flex-col items-center sm:h-screen h-auto  text-[40px] p-10 font-bold'>
      <h1>Frequently Asked</h1>
      <h1 className='font-bold bg-gradient-to-b text-transparent bg-clip-text igos from-[#5776cd] from-30% to-[#CD05FF] to-70%'>PROJECTS</h1>

      <div className='flex justify-center   '>
        <div className='basis-1/2' >
          <img src={Faqboy} alt="" className='w-1/2 mx-auto' />
        </div>
{/* bggradient */}
    <div  className=" absolute gradient2 lg:w-[294.236px] md:w-[294.236px] w-[194.236px]  lg:h-[260px] md:h-[180px] h-[250px] top-[50%] left-[20%] z-[-10] "></div>

        <div className='basis-1/2  flex flex-col space-y-2 text-[20px] mt-4 p-5 '>
          {data.map(item => (
            <div className='flex flex-col     ' onClick={() => toggleOpen(item.id)} key={item.id}>
              <button  className={`${item.open ? "p-2   rounded-[0.625rem]     border-2 border-[#db00c9] sm:w-[40%] w-[50%] bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.8375rem] text-[.3375rem] font-bold ":"p-2   rounded-[0.625rem] md:w-[40%] w-[50%]  bg-[#121314] text-white text-center font-['Helvetica'] lg:text-[.8375rem] text-[.3375rem] font-bold " }`}>
                <div className={`flex ${item.open ? "items-end":"items-center" } `} >{item.open ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
                {item.head}
                </div>
                
              </button>
            
              <div className='flex flex-col text-[10px]  max-w-[60%] text-justify  '>
              
              <div className='w-[80%]'>
              {item.open && <p className=''> {item.description}</p>}
              </div>
              </div>
            
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};
