import React from 'react'

const Information = ({about1,about2}) => {
  return (
    <div className='my-48 flex flex-wrap justify-center items-center gap-10 '>
        <div className=" space-y-6  md:w-1/2 mt-28 ">
            <div className="text-center md:text-start text-xl md:text-3xl">
              <h1 className='  font-medium '>
                  More Information
              </h1>
              <h1 className=' font-medium'>About The Best Beaches</h1>
            </div>
            <div className=" text-gray-500 text-center md:text-start">
              <p>
              You can find the most beautiful and pleasant places at the best prices with special discounts, you choose the place we will guide you all the way to wait, get your place now.  
              </p>
            </div>
            <div className="text-center md:text-start">
              <button className=' py-5 px-10 bg-green-900 text-white'>Reserve a place</button>
            </div>
        </div>
        <div className=" flex flex-wrap gap-4   items-center mt-20">
            <div className=" relative overflow-hidden">
              <img src={about1} className='w-32 md:w-60 hover:scale-125 transition-transform duration-500' alt="" />
            </div>
            <div className=" relative overflow-hidden">
              <img src={about2} className='w-44 md:w-72 hover:scale-125 transition-transform duration-500' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Information