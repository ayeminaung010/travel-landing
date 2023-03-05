import React from 'react'
import {AiOutlineStar,AiOutlineArrowRight} from 'react-icons/ai';
const Place = ({discover1,discover2,discover3,discover4}) => {
    const slideData = [
        {
          image: discover1,
          title: 'Bali',
          location: 'Indonesia',
          price: '$2499',
          rating : '4.8'
        },
        {
          image: discover2,
          title: 'WhiteHeaven',
          location: 'Australia',
          price: '$1599',
          rating : '5.0'
        },
        {
          image: discover3,
          title: 'Hawaii',
          location: 'EE.UU',
          price: '$3499',
          rating : '4.9'
        },
        {
          image: discover4,
          title: 'Bora Bora',
          location: 'Polinesia',
          price: '$2499',
          rating : '4.8'
        },
        {
          image: discover4,
          title: 'Hvar',
          location: 'Crocia',
          price: '$1499',
          rating : '4.8'
        },
      ];

      
  return (
    <div className=' mt-20'>
        <div className=" text-3xl font-medium text-center">
            <h1>
                Choose Your Place
            </h1>
        </div>
        <div className=" w-56 relative overflow-hidden">
            <img src={discover1} alt="" className=' transition-transform duration-500 hover:scale-125' />
            <div className=" absolute bottom-8 text-white left-3">
                <div className="flex flex-col gap-5">
                    <div className="">
                        <h1 className=' font-medium text-2xl'>Bali</h1>
                        <span className=' text-sm'>Indonesia</span>
                    </div>
                    <div className="">
                        <span>$2499</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 absolute top-3 right-2 text-white">
                <AiOutlineStar className=' text-xl'/>
                <span>4.8</span>
            </div>
            <div className="absolute bottom-0 right-0">
                <button className=' bg-green-900 px-4 py-2'>
                    <AiOutlineArrowRight className=' text-2xl text-white'/>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Place