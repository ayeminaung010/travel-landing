import React from 'react'

const Experience = ({experience1,experience2}) => {
  return (
    <div className=' mt-20'>
        <div className=" text-3xl font-medium text-center">
            <h1>
                With Our Experience
            </h1>
            <h1>
                We Will Serve You
            </h1>
        </div>
        <div className="flex  justify-center mt-10">
            <div className=" p-5 w-40">
                <h1 className=' text-2xl font-semibold'>20</h1>
                <span>Year
                Experience</span>
            </div>
            <div className=" p-5 w-40">
                <h1 className=' text-2xl font-semibold'>75</h1>
                <span>Complete
                tours</span>
            </div>
            <div className=" p-5 w-40">
                <h1 className=' text-2xl font-semibold'>650+</h1>
                <span>Tourist
                Destination</span>
            </div>
        </div>
        <div className=" flex justify-center mt-10">
            <div className=" flex justify-center">
                <img src={experience1} className=' h-80' alt="" />
            </div>
            <img src={experience2} className=' w-64 h-80 mt-20 -ml-40' alt="" />
        </div>
    </div>
  )
}

export default Experience