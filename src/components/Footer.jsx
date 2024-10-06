import React from 'react'
import { FooterLogo } from '../assets';

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#4f4aec] w-full px-5 sm:px-20 pt-10 text-white'>
            <div className='min-h-[500px] flex justify-between flex-wrap text-xs sm:text-sm'>
                <div className='flex flex-col gap-4'>
                    <img src={FooterLogo} alt="footer logo" className='w-[100px] sm:w-[120px] mb-7' />
                    <p>No 200, ikola street, Iyanyu Ipaja, Lagos</p>
                    <p>+234 -9057316290</p>
                    <p>hello@newkindred.com</p>
                </div>
                <ul className='font-normal flex flex-col gap-4'>
                    <li className='font-medium mb-4'>About</li>
                    <li><Link>Our Story</Link></li>
                    <li><Link>Team</Link></li>
                    <li><Link>Careers</Link></li>
                </ul>
                <ul className='flex flex-col gap-4'>
                    <li className='font-medium mb-4'>Follow Us</li>
                    <li className='font-normal flex items-center gap-2'>
                        <FaFacebookF className='text-2xl'/>
                        <Link className='underline'>Facebook</Link>
                    </li>
                    <li className='font-normal flex items-center gap-2'>
                        <FaTwitter className='text-2xl'/>
                        <Link className='underline'>Twitter</Link>
                    </li>
                    <li className='font-normal flex items-center gap-2'>
                        <FaInstagram className='text-2xl'/>
                        <Link className='underline'>Instagram</Link>
                    </li>
                </ul>
            </div>
            <div className='w-full flex items-center justify-between flex-wrap gap-4 pb-5 text-sm'>
                <div className='flex items-center gap-5'>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                </div>
                <p className='text-[#c9c9c9e5]'>Copyright <span>&copy;</span> {new Date().getFullYear()} NewKindred. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
