import React from 'react'

const Subscribe = () => {
  return (
    <div className=' mt-20'>
        <div className=" bg-green-800 text-white py-14">
            <div className="text-xl md:text-3xl font-medium text-center">
                <h1>
                Subscribe Our
                </h1>
                <h1>
                Newsletter
                </h1>
            </div>
            <div className="mt-7 flex md:text-lg justify-center text-center text-md px-3">
                <span className=''>Subscribe to our newsletter and get a special 30% discount.</span>
            </div>
            <div className="flex justify-center">
                <div className="  mt-7 w-[300px] md:w-[550px]">
                    <input type="text" placeholder='Enter email' className=' outline-none py-5 px-2 md:px-4 w-full' />
                    <button className=' bg-green-900 py-4 md:px-8 px-4 md:-m-[150px] -m-[120px]'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe