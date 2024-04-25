import { React, useState } from 'react'
import { Infrastructure } from './Infrastructure';
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';




import bgpic from "../assets/bgshapes.svg";
import bgpicsecound from "../assets/bgshape2.svg";

export const Navbar = () => {

  const [toogle, settoogle] = useState(false);
  const {pathname} = useLocation();



  return (
    <div className=' '>
      <nav
        className="flex flex-col justify-between items-center md:flex-row lg:gap-10 gap-3     text-white relative md:h-[100px] h-[auto]   h-16 w-auto opacity-90 shadow-md   "
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
          className={`md:flex hidden xl:gap-20 lg:gap-1 gap-2 items-center    lg:text-[16px] text-[10px] lg:p-3 p-2 rounded-full    md:flex-row flex-col    text-center  cursor-pointer   bg-[#353337] bg-opacity-100  `}
        >



          <Link to="/">
            <li className={` hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]   gap-2.5 p-2.5 w-[5.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ${pathname === "/" && "bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]   hover:shadow-md"}  `}>
              Home
              </li>
            </Link>
          <Link to='/Tokenlanchpad'> <li className={` gap-2.5 p-2.5  w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ${pathname === "/Tokenlanchpad" && " bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]  hover:shadow-md"}  `}>Nft_Launchpad</li></Link>
          <a href="" > <li className="  hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]     hover:shadow-md    gap-2.5 p-2.5 p-2 w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Stake/Farm</li></a>
          <a href="" > <li className=" hover:bg-gradient-to-b  from-[#0400DB]    to-[#CD05FF]     hover:shadow-md    gap-2.5 p-2.5 p-2 w-[7.375rem] rounded-tl-[1.25rem] rounded-br-[1.25rem] ">Claims</li></a>

        </ul>




        <div
          className={`cursor-pointer hidden   md:flex justify-center items-center    h-14 mr-2  bg-gradient-to-b from-[#0400DB]    to-[#CD05FF]         gap-2.5 p-2.5  lg:w-[10.375rem] w-[2.375rem]  rounded-tl-[1.25rem] rounded-br-[1.25rem] `}
        >

          <button>      <Link to="/" className="link-to-dashboard  lg:text-[14px] text-[6px]">Connect Wallet</Link>
          </button>



        </div>



        <ul
          className={`${toogle
              ? "flex  md:justify-around  lg:text-[16px] text-[10px]  w-[auto] md:gap-12 gap-1 md:flex-row flex-col    md:bg-transparent  cursor-pointer  "
              : "hidden"
            }`}
        >


          <Link to="/">  <li className="hover:text-green-400 ">Home</li></Link>
          <Link to='/Tokenlanchpad'><li className="hover:text-green-400 ">Nft_Launchpad</li></Link>
          <a href="" > <li className="hover:text-green-400 ">Stake/Farm</li></a>
          <a href="" > <li className="hover:text-green-400 ">Claims</li></a>
        </ul>


        <div
          className={` ${toogle
              ? " cursor-pointer    md:hidden flex justify-center items-center h-12    mr-2  bg-gradient-to-b from-[#0400DB]    to-[#CD05FF]         gap-2.5 p-2  lg:w-[10.375rem] w-[6.375rem]  rounded-tl-[1.25rem] rounded-br-[1.25rem]"
              : "hidden"
            }`}
        >

          <button>      <Link to="/" className="link-to-dashboard  lg:text-[14px] text-[6px]">Connect Wallet</Link>
          </button>

        </div>

      </nav>




    </div>
  )
}
