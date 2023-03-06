import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="mt-28">
        <div className="my-20 flex flex-wrap flex-col gap-5   lg:space-x-12 md:flex-row    md:space-y-0 ">
            <div className="  flex flex-wrap justify-start lg:space-x-24   ">
                <div className=' w-52 '>
                    <h5 className=' text-xl'>Travel</h5>
                    <p className=' text-gray-500 mt-3'>Travel you choose the
                    destination, we offer you the
                    experience.</p>
                    <div className="flex space-x-5 mt-7">
                        <AiFillFacebook className=' text-2xl'/>
                        <BsTwitter className=' text-2xl'/>
                        <AiFillInstagram className=' text-2xl'/>
                        <AiFillYoutube className=' text-2xl'/>
                    </div>
                </div>
                <div className=' hidden md:block'>
                    <h5 className=' text-xl'>About</h5>
                    <div className="flex flex-col space-y-2 mt-3">
                        <span className=' text-gray-500'>About Us</span>
                        <span className=' text-gray-500'>Features</span>
                        <span className=' text-gray-500'>New & Blog</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap  lg:space-x-32 justify-start   flex-col space-y-5 md:space-x-6  md:flex-row md:space-y-0">
                <div className=' md:hidden'>
                    <h5 className=' text-xl'>About</h5>
                    <div className="flex flex-col space-y-2 mt-3">
                        <span className=' text-gray-500'>About Us</span>
                        <span className=' text-gray-500'>Features</span>
                        <span className=' text-gray-500'>New & Blog</span>
                    </div>
                </div>
                <div className='   '>
                    <h5 className=' text-xl'>Company</h5>
                    <div className="flex flex-col space-y-2 mt-3">
                        <span className=' text-gray-500'>Team</span>
                        <span className=' text-gray-500'>Plan y Pricing</span>
                        <span className=' text-gray-500'>Become a member</span>
                    </div>
                </div>
                <div className='   '>
                    <h5 className=' text-xl'>Support</h5>
                    <div className="flex flex-col space-y-2 mt-3">
                        <span className=' text-gray-500'>FAQs</span>
                        <span className=' text-gray-500'>Support Center</span>
                        <span className=' text-gray-500'>Contact Us</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between  my-10">
            <span>© 2023 All rights reserved.</span>
            <div className="flex flex-wrap  gap-5">
                <a href="#" className=' text-gray-400 hover:text-gray-600'>Terms & Agreements</a>
                <a href="#" className=' text-gray-400 hover:text-gray-600'>Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer