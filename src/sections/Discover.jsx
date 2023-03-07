import React from 'react'
import SwiperCompo from '../components/SwiperCompo'


const Discover = ({discover1,discover2,discover3,discover4}) => {
  return (
    <div className=' my-20'>
        <div className="text-xl md:text-3xl font-medium text-center">
            <h1>
                Discover The Most
            </h1>
            <h1>
                Attractive Places
            </h1>
        </div>
        <div className="">
          <SwiperCompo discover1={discover1} discover2={discover2} discover3={discover3} discover4={discover4}/>
        </div>
    </div>
  )
}

export default Discover