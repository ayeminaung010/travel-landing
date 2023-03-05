import React from 'react'
import {AiOutlineStar,AiOutlineArrowRight} from 'react-icons/ai';

const LoopPlaces = ({image,title,rating,price,location}) => {

  return (
    <div className="w-36 md:w-56 relative overflow-hidden">
        <img src={image} alt="" className=' transition-transform duration-500 hover:scale-125' />
        <div className=" absolute bottom-2 md:bottom-8 text-white left-3">
            <div className="flex flex-col gap-5">
                <div className="">
                    <h1 className=' font-medium text-lg md:text-2xl'>{title}</h1>
                    <span className='text-xs md:text-sm'>{location}</span>
                </div>
                <div className="">
                    <span>{price}</span>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 absolute top-3 right-2 text-white">
            <AiOutlineStar className=' text-xl'/>
            <span>{rating}</span>
        </div>
        <div className="absolute bottom-0 right-0">
            <button className=' bg-green-900 px-4 py-2'>
                <AiOutlineArrowRight className=' text-lg md:text-2xl text-white'/>
            </button>
        </div>
    </div>
  )
}

export default LoopPlaces