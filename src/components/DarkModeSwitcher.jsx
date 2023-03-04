import { useTheme } from 'next-themes'
import React from 'react'

const DarkModeSwitcher = ({FiMoon,BsFillSunFill}) => {
    const { theme, setTheme } = useTheme();
    const isDarkMode = theme === 'dark';
  
    const handleClick = () => {
      setTheme(isDarkMode ? 'light' : 'dark');
    };
  
  return (
    <div>
        {isDarkMode ? (
            <FiMoon onClick={handleClick} className=' text-xl' />
          ) : (
            <BsFillSunFill onClick={handleClick} className=' text-xl' />
          )}
    </div>
  )
}

export default DarkModeSwitcher