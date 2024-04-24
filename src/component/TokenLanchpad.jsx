import React from 'react'
import bgimg from "../component/newbg.png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRotate } from "react-icons/fa6";
import { Navbar } from './Navbar'
import { Footer } from './Footer';
export const TokenLanchpad = () => {
  return (
    <div className=" bg-cover bg-center overflow-y-auto" style={{ backgroundImage: `url(${bgimg}) ` }}>


<Navbar/>

<div className='flex flex-col gap-4 m-10'>

<h1 className='text-[36px]'>Token Launchedpad</h1>

<div className='bg-[#1F1F1F] rounded-xl w-[60%] max-h-[20%] text-[14px] p-5 shadow-inner  shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue mt-4'>
<p>Our tokens are fully SPL compliant Non-Mintable Tokens. Use the Bullypad Token factory to mint your very own token at the click of a button. Your Bullypad token will be shown favourably in the Bullypad browser and
bypass the need for an audit on the token contract itself, as well as when using our ILO dapp. Anyone can query our token mint factory with your token address to see your new token is a valid, safe, and SPL compliant
token.</p>
</div>

<div className='mt-10'>
<h1 className='text-[18px] '>SPL compliant Non-Mintable Tokens Specs</h1>
<div>

<ul className='grid grid-cols-2 mt-4 gap-8'>
  <li className="flex items-center "><IoIosCheckmarkCircleOutline className='text-[#1EBEA5] ' />

    <label htmlFor="checkbox1" className="ml-2">No mint function</label>
  </li>
  <li className="flex items-center"><IoIosCheckmarkCircleOutline className='text-[#1EBEA5] ' />
    <label htmlFor="checkbox2 rounded-full" className="ml-2">Fully SPL compliant</label>
  </li>
  <li className="flex items-center"><IoIosCheckmarkCircleOutline className='text-[#1EBEA5] ' />
    <label htmlFor="checkbox3" className="ml-2">No owner / admin functions</label>
  </li>
  <li className="flex items-center"><IoIosCheckmarkCircleOutline className='text-[#1EBEA5] ' />
    <label htmlFor="checkbox4" className="ml-2">Fully decentralised</label>
  </li>
  <li className="flex items-center"><IoIosCheckmarkCircleOutline className='text-[#1EBEA5] ' />
    <label htmlFor="checkbox5" className="ml-2">No unsafe code in the token contract itself</label>
  </li>
</ul>


</div>



</div>
<div className='flex md:flex-row flex-col  gap-10 '>
<div className='flex flex-col  bg-[#1F1F1F] rounded-xl w-[60%]  text-[14px] p-5 shadow-inner shadow-[#2945fc]  drop-shadow-3xl border-gradient-pink-blue mt-4'>
<h1 className='text-[18px] ml-9 font-bold'>Mint your own Solana SPL Token!</h1>

<div className=' flex flex-col items-center mt-8 gap-10'>
<input type="text" className='w-[90%] bg-transparent  rounded-lg p-3 shadow-inner shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue' placeholder='Token Name' />
<input type="text" className='w-[90%] bg-transparent  rounded-lg p-3 shadow-inner shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue' placeholder='Token Symbols' />

<div className='flex flex-col  w-full gap-4  '>
<input type="text" className='mx-auto w-[90%] bg-transparent  rounded-lg p-3 shadow-inner shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue' placeholder='Token Supply' />
<div className=' ml-12'>
<p className='text-[12px] text-[#656262]'>Total supply (excluding decimals e.g. 100 tokens)</p>
</div>
<input type="text" className='mx-auto w-[90%] bg-transparent  rounded-lg p-3 shadow-inner shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue' value={'18'} />

<div className=' ml-12'>
<p className='text-[12px] text-[#656262]'>Decimals (18 reccomended)</p>

</div>
</div>


</div>

<div class='flex items-center justify-center text-16 font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#f966b9] via-[#0d93ec] to-[#5FFBF1] from-[45%] via-[50%] to-[55%] mt-10'><h1>Upload Logo</h1></div>

<div className='flex flex-col   mt-8 gap-10  '>

<label htmlFor="" className='mx-9 mr-2'><input type="checkbox"  className='w-[8%]'/>Revoke Freeze</label>
<label htmlFor="" className='mx-9 '><input type="checkbox" className='w-[8%]' />Revoke Mint</label>
<label htmlFor="" className='mx-9'><input type="checkbox"  className='w-[8%]'/>Revoke Adjustable Metadata</label>

</div>

<div className='flex sm:flex-row flex-col sm:gap-10 gap-1 '>

<div className='flex   flex-col  w-[40%]  gap-4 m-14    text-16 font-bold  mt-10 text-white'>
  <h3 className='text-white text-[14px] '>Buy Tax</h3>
  <select className=' p-2 rounded-xl bg-transparent shadow-inner shadow-[#f129fc] border-2  border-blue-600  drop-shadow-2xl '>
    <option value="0" >0</option>
    <option value="1" selected>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>

<div className='flex   flex-col sm:gap-4 gap-0 m-14  w-[40%]  text-16 font-bold  sm:mt-10 mt-0 text-white'>
  <h3 className='text-white text-[14px]'>Sell Tax</h3>
  <select className=' p-2 rounded-xl shadow-inner bg-transparent shadow-[#f129fc] border-2 border-blue-600  drop-shadow-2xl '>
    <option value="0" >0</option>
    <option value="1" selected>1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>


</div>

<div className='flex sm:flex-row flex-col gap-10  items-center ml-12 justify-between '>


<div className='flex flex-col  text-[#656262]'>

<p className='text-[12px] '>Total supply (including decimals - raw amount)</p>
<p>0</p>


</div>


<div class='flex flex-col    text-16 font-bold  '>
 
  <h1 className='bg-gradient-to-r text-transparent bg-clip-text from-[#f966b9] via-[#0d93ec] to-[#5FFBF1] from-[20%] via-[80%] to-[30%]'>Fee: 1.5 SOL</h1>
  <p className='text-[12px] text-[#656262] '>+ 0.2% total supply</p>

 </div>
  
</div>
<button className='sm:w-[50%] w-[40%] hover:scale-110 transition-all ease-linear delay-100   mx-auto  rounded-lg p-3 bg-gradient-to-b from-[#0400DB] to-[#CD05FF] shadow-inner shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue sm:text-[15px] text-[8px]' placeholder='Token Name' >Mint A New Tokens</button>

</div>

  
  
  <div className='flex  bg-[#1F1F1F] rounded-xl w-[40%] sm:h-[20%] max-w-[40%]     sm:text-[14px] text-[8px] p-5 shadow-inner  shadow-[#9629fc] drop-shadow-3xl border-gradient-pink-blue mt-4'>


<div className='flex flex-col gap-4'>
<h1 className='font-semibold sm:text-[18px] text-[8px]'>Your Token</h1>
<p>You have not minted any SPL Token yet.
All Tokens generated by your account will be shown here.</p>
</div>
<FaRotate  className='sm:text-[25px] text-[30px]'/>

</div>


</div>
<div className='  mt-20   border-2  shadow-inner  shadow-[#fc29bd] drop-shadow-2xl border-[#0400DB]     rounded-tl-[5.25rem] rounded-br-[5.25rem] '>
<Footer/>
</div>
</div>
  </div>
  
  )
}
