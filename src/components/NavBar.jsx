import React, { useState } from 'react'
import {FiMoon} from 'react-icons/fi'
import {BsFillSunFill} from 'react-icons/bs'
import {CiMenuFries} from 'react-icons/ci'
import {TfiClose} from 'react-icons/tfi'

import DarkModeSwitcher from './DarkModeSwitcher'

const NavBar = () => {
    const [menu,setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(true);
    }

  return (
    <nav className=' mt-6 sticky z-50 top-7'>
        <div className="flex  flex-wrap justify-between items-center">
            <div className=" text-2xl font-bold ">
                <h1>Travel</h1>
            </div>
            <div className=" ">
                <ul className='hidden space-x-10 text-lg flex-wrap font-semibold items-center justify-between md:flex'>
                    <li className=' link'>Home</li>
                    <li className=' link'>About</li>
                    <li className=' link'>Discover</li>
                    <li className=' link'>Places</li>
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
            <div className={menu === false ? 'hidden' : " md:hidden absolute top-0 right-0 w-full h-screen transition-all duration-500"} >
                <div className=" mt-8">
                    <div className=" mr-5  flex justify-end">
                        <TfiClose className=' text-2xl ' onClick={() => setMenu(false)} />
                    </div>
                    <ul className='mt-5 flex space-y-10 text-lg flex-col font-semibold items-center justify-between '>
                        <li className=' link active'>Home</li>
                        <li className=' link'>About</li>
                        <li className=' link'>Discover</li>
                        <li className=' link'>Places</li>
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