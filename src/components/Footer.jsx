import React from 'react'
import { FooterLogo } from '../assets';

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#4f4aec] w-full px-5 sm:px-20 pt-10 pb-10 text-white'>
            <div className='flex justify-between flex-wrap gap-x-5 gap-y-10 text-xs sm:text-sm'>

                <div className='flex flex-col gap-4'>
                    <img src={FooterLogo} alt="footer logo" className='w-[100px] sm:w-[120px] mb-7' />
                    <div className='flex gap-3'>
                        <FaFacebookF className='text-lg' />
                        <FaTwitter className='text-lg' />
                        <FaInstagram className='text-lg' />
                        <FaYoutube className='text-lg' />
                    </div>
                    <a href='mailto:hello@newkindred.com'>hello@newkindred.com</a>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className=''>About Us</p>
                    <Link to='/work'>Our Works</Link>
                    <Link to='/blogs'>Blog</Link>
                    <Link to='/services'>Services</Link>
                </div>

                <div className='flex flex-col items-center max-w-[320px]'>
                    <p className='mb-2'>Get valuable insights, reports and strategy straight to your inbox.</p>
                    <div className='flex h-[40px] max-w-full'>
                        <input 
                            type="email" 
                            placeholder="hello@newkindred.com" 
                            className='w-[80%] h-full py-1 px-3 rounded-l-md outline-none text-black text-xs'
                        />
                        <button className='bg-[#fcae10] text-black px-4 py-1 rounded-r-md'>
                            Send
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='mb-2 text-center'>Want to work with us?</p>
                    <button className='border-2 border-[#FFBD1AC4] px-6 py-2 rounded-md text-sm hover:bg-white hover:text-[#4f4aec] transition duration-300 ease flex items-center gap-2'>
                        Start a Project
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div className='w-full flex items-center justify-between flex-wrap gap-x-4 gap-y-2 mt-10 text-xs'>
                <Link to='/privacy-policy' className='text-[#c9c9c9e5]'>Our Privacy Policy</Link>
                <p className='text-[#c9c9c9e5]'>&copy; {new Date().getFullYear()} NewKindred. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
