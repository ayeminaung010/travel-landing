import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HeroSection from './components/HeroSection';
import home from '../public/img/home1.jpg';
import home2 from '../public/img/home2.jpg';
import about1 from '../public/img/about1.jpg';
import about2 from '../public/img/about2.jpg';
import discover1 from '../public/img/discover1.jpg';
import discover2 from '../public/img/discover2.jpg';
import discover3 from '../public/img/discover3.jpg';
import discover4 from '../public/img/discover4.jpg';

import experience1 from '../public/img/experience1.jpg';
import experience2 from '../public/img/experience2.jpg';

import video from '../public/video/video.mp4';

import Information from './sections/Information';
import Discover from './sections/Discover';
import 'swiper/css';
import Experience from './sections/Experience';
import Video from './sections/Video';
import Place from './sections/Place';


const App = () => {
  

  return (
    <>
      <div className="font-poppins container mx-auto selection:bg-green-400 dark:bg-gray-600 ">
        <img src={home} className=' absolute right-0 top-0 md:object-cover object-none w-screen h-screen lg:h-screen xl:h-5/6  -z-50' alt="" />
        <NavBar className=' z-50'/>
        <HeroSection home2={home2}/>
        <Information className='' about1={about1} about2={about2}/>
        <Discover discover1={discover1} discover2={discover2} discover3={discover3} discover4={discover4}/>
        <Experience experience1={experience1} experience2={experience2}/>
        <Video video={video}/>
        <Place discover1={discover1} discover2={discover2} discover3={discover3} discover4={discover4} />
      </div>
    </>
  )
}

export default App