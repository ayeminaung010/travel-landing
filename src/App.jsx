import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import HeroSection from './components/HeroSection';
import home from '../public/img/home1.jpg';

const App = () => {
  

  return (
    <>
      <div className=" container mx-auto selection:bg-green-400 dark:bg-gray-600 text-green-900">
        <img src={home} className=' absolute right-0 top-0 object-cover  w-full h-5/6 -z-50' alt="" />
        <NavBar className=' z-50'/>
        <HeroSection/>
        <div className="h-screen w-full bg-gray-400"></div>
        <div className="h-screen w-full bg-red-400"></div>
        <div className="h-screen w-full bg-yellow-400"></div>
      </div>
    </>
  )
}

export default App