import React from 'react'
import LoopPlaces from '../components/LoopPlaces';
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
    <div className=' my-20'>
        <div className=" text-3xl font-medium text-center">
            <h1>
                Choose Your Place
            </h1>
        </div>
        <div className=" flex flex-wrap items-center justify-center ">
          <div className="lg:w-[800px] md:w-[500px]">
            <div className="flex  flex-wrap  justify-center gap-10 mt-10 items-center md:justify-start">
                {slideData.map((data) =>(
                    <LoopPlaces key={data.title} image={data.image} title={data.title} location={data.location} rating={data.rating} price={data.price}/>
                  ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Place