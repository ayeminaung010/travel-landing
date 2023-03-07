import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll'

const ToTopArrow = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
    useEffect(() => {
      window.addEventListener('scroll', toggleVisible);
    },[])

    const ScrollTopHandler = () => {
        scroll.scrollToTop();
    }

  return (
    <div className=' z-50'>
      {visible ? (
      <button onClick={ScrollTopHandler} className=' bg-green-700 px-3  rounded-full py-3 fixed bottom-10 right-10 hover:bg-green-500 '>
          <AiOutlineArrowUp className=' text-2xl ' />
      </button>
      ) : ('')}
        
    </div>
  )
}

export default ToTopArrow