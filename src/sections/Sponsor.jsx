import React from 'react'

const Sponsor = ({sponsors1,sponsors2,sponsors3,sponsors4,sponsors5}) => {
    
  return (
    <div className=' mt-20'>
        <div className="flex flex-wrap gap-5 space-y-7 justify-center md:space-x-16 items-center">
            <img src={sponsors1} alt="" className={'sponsorImg '} />
            <img src={sponsors2} alt="" className={'sponsorImg '} />
            <img src={sponsors3} alt="" className={'sponsorImg '} />
            <img src={sponsors4} alt="" className={'sponsorImg '} />
            <img src={sponsors5} alt="" className={'sponsorImg '} />
        </div>
    </div>
  )
}

export default Sponsor