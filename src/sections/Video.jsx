import React from 'react'
import {FaPlay} from 'react-icons/fa';

const Video = ({video}) => {
  return (
    <div className=' mt-20 text-center'>
        <div className=" text-3xl font-medium ">
            <h1>
                Video Tour
            </h1>
        </div>
        <div className="mt-7 flex text-gray-500 justify-center">
            <span className=' w-[500px]'>Find out more with our video of the most beautiful and pleasant places for you and your family.</span>
        </div>

        <div className="mt-10 flex justify-center">
            <div className="  w-[700px] relative">
                <video src={video}  className=' border-2'>
                
                </video>
                <div className=" absolute -bottom-5 right-5">
                    <button className=' px-8 py-4 bg-green-900 border-2 border-none'>
                        <FaPlay className=' text-white text-2xl'/>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Video
