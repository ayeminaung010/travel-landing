import React, { useEffect, useState } from 'react'
import {FiMoon} from 'react-icons/fi'
import {BsFillSunFill} from 'react-icons/bs'
import {CiMenuFries} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'

import DarkModeSwitcher from './DarkModeSwitcher'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const NavBar = () => {
    const [menu,setMenu] = useState(false);
    
    const handleMenu = () => {
        setMenu(true);
        document.body.style.overflow = 'hidden';
    }

  return (
    <nav className=' mt-6  sticky z-50 top-7'>
        <div className="flex   flex-wrap justify-between items-center">
            <div className=" text-2xl font-bold ">
                <h1>Travel</h1>
            </div>
            <div className=" ">
                <ul className='hidden space-x-10 text-lg flex-wrap font-semibold items-center justify-between md:flex'>
                    
                    <li className=' link'>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li className=' link'>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                            About
                        </Link>
                    </li>
                    <li className=' link'>
                        <Link activeClass="active" to="discover" spy={true} smooth={true} offset={50} duration={500} >
                            Discover
                        </Link>
                    </li>
                    <li className=' link'>
                        <Link activeClass="active" to="places" spy={true} smooth={true} offset={50} duration={500} >
                            Places
                        </Link>
                    </li>
                    <li className=' link'>
                        <DarkModeSwitcher FiMoon={FiMoon} BsFillSunFill={BsFillSunFill}/>
                    </li>
                </ul>
                <div className={menu === true ? ' hidden' : " md:hidden"}>
                    <button onClick={handleMenu}>
                        <CiMenuFries className=' text-2xl '/>
                    </button>
                </div>
            </div>    
            {/* for mobile  */}
            <div className={menu === false ? 'hidden' : " md:hidden bg-gray-700 absolute top-0 right-0 w-full h-screen transition-opacity  duration-500"} >
                <div className=" mt-3">
                    <div className=" mr-5  flex justify-end">
                        <TfiClose className=' text-2xl ' onClick={() =>
                            {
                                setMenu(false) 
                                document.body.style.overflow = 'visible';
                            }
                             } />
                    </div>
                    <ul className='mt-5 flex space-y-10 text-lg flex-col font-semibold items-center justify-between '>
                        <li className=' link '>
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                                Home
                            </Link>
                        </li>
                        <li className=' link'>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                                About
                            </Link>
                        </li>
                        <li className=' link'>
                            <Link activeClass="active" to="discover" spy={true} smooth={true} offset={50} duration={500} >
                                Discover
                            </Link>
                        </li>
                        <li className=' link'>
                            <Link activeClass="active" to="places" spy={true} smooth={true} offset={50} duration={500} >
                                Places
                            </Link>
                        </li>
                        <li className=' link'>
                            <DarkModeSwitcher FiMoon={FiMoon} BsFillSunFill={BsFillSunFill}/>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    </nav>
  )
}

export default NavBar


