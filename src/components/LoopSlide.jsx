import React from 'react'

const LoopSlide = ({image,title,description,isActive}) => {
  return (
      <div className="">
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden ">
              <img src={image} className={isActive ? 'object-cover h-96  hover:scale-125 transition-transform duration-300' : 'object-cover h-80 '} alt="" />
              <div className=" absolute bottom-5 left-3 text-white">
                <h3 className=' text-2xl font-medium'>{title}</h3>
                <p className=' text-sm'>{description}</p>
              </div>
            </div>
         </div> 
      </div>
  )
}

export default LoopSlide