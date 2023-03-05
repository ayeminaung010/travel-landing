import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiOutlineTwitter,AiOutlineArrowRight} from 'react-icons/ai';

const HeroSection = ({home2}) => {
  return (
    <div className='flex flex-wrap gap-5 justify-between text-white my-16 md:my-24'>
      <div className=" ">
        <span className=' text-xl font-medium'>
          Discover your place
        </span>
        <div className='flex flex-col gap-5 text-5xl md:text-6xl mt-3'>
          <span>
            Explore The 
          </span>
          <div className="flex space-x-5">
            <span>Best</span>
            <span className=' font-semibold'>
              Beautiful
            </span>
          </div>
          <span className=' font-semibold'>
            Beaches
          </span>
        </div>
        <div className=" mt-12">
          <button className=' bg-green-900 text-white px-10 font-semibold py-5'>Explore</button>
        </div>
        <div className=" flex flex-wrap  justify-between gap-5 items-center mb-5 mt-4 md:mt-10">
          <div className=" flex flex-wrap  md:flex-row  md:items-center  flex-col gap-5 md:gap-10 justify-start  ">
            <AiFillFacebook className=' text-2xl'/>
            <AiFillInstagram className=' text-2xl'/>
            <AiOutlineTwitter className=' text-2xl'/>
          </div>
          {/* for mobile  */}
          <div className="mt-10 md:hidden">
            <div className=" flex space-x-4  items-center bg-green-900 w-64  px-5 py-3 ">
              <div className=" w-2/3 p-3"> 
                  <span className='font-semibold '>5 best places to visit</span>
                  <div className=" font-semibold mt-3">
                    <a href="#" className=' flex items-center gap-3 '>
                      More <AiOutlineArrowRight/>
                    </a>
                  </div>
              </div>
              <div className=" relative overflow-hidden">
                <img src={home2} className=' w-64  hover:scale-125 transition-transform duration-200' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-auto hidden md:block">
        <div className=" flex space-x-4  items-center bg-green-900 w-80 md:w-96 px-6 py-8">
          <div className=" w-2/3 p-3"> 
              <span className='font-semibold text-xl'>5 best places to visit</span>
              <div className=" font-semibold mt-3">
                <a href="#" className=' flex items-center gap-3 '>
                  More <AiOutlineArrowRight/>
                </a>
              </div>
          </div>
          <div className=" relative overflow-hidden">
            <img src={home2} className=' w-52 hover:scale-125 transition-transform duration-200' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection