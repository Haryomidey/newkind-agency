import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Logo} from '../assets/index';
import Button from './Button';

import { IoMdMenu } from "react-icons/io";

const Header = () => {


    return (
        <div className='fixed top-0 left-0 w-full h-[80px] header-shadow px-5 sm:px-20 bg-white'>
            <div className='w-full h-full flex items-center justify-between gap-5'>
                <div className='flex items-center h-full'>
                    <Link to='/'><img src={Logo} className='w-[100px] sm:w-[200px]' alt='Logo image' /></Link>
                </div>
                <div className='w-[65%] items-center justify-between hidden lg:flex'>
                    <ul className='flex items-center gap-8'>
                        <li>
                            <NavLink to='/work' className='raleway'>Work</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='raleway'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services' className='raleway'>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className='raleway'>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/career' className='raleway'>Career</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to='/contact-us'><Button>Let's Talk</Button></Link>
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <IoMdMenu />
                </div>
            </div>
        </div>
    )
}

export default Header
