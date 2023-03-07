import React, { useRef, useState } from 'react'
import {FaPlay,FaPauseCircle, FaSadCry} from 'react-icons/fa';

const Video = ({video}) => {
    const [play,setPlay] = useState(false);
    const videoRef = useRef(null);
    const playBtn = (play) => {
        videoRef.current.play();
        setPlay(true);
        
    }
    const pauseBtn = (play) => {
        videoRef.current.pause();
        setPlay(false);
    }
  return (
    <div className=' my-28 text-center'>
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
                <video src={video}  className=' border-2' ref={videoRef} >
                
                </video>
                <div className=" absolute -bottom-5 right-5">
                    {play === false ? (
                        <button className=' px-8 py-4 bg-green-900 border-2 border-none hover:bg-green-600 ' onClick={playBtn}>
                        <FaPlay className=' text-white text-2xl'/>
                        </button>
                    ) : 
                    (
                        <button className=' px-8 py-4 bg-green-900 border-2 border-none hover:bg-green-600 ' onClick={pauseBtn}>
                        <FaPauseCircle className=' text-white text-2xl'/>
                        </button>
                    )}
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Video
