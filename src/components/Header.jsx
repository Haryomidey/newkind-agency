import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo } from '../assets/index';
import Button from './Button';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Header = () => {
    const [isNavbar, setIsNavbar] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsNavbar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-[80px] header px-5 sm:px-20 bg-white z-[111]'>
            <div className='w-full h-full flex items-center justify-between gap-5'>
                <div className='flex items-center h-full'>
                    <Link to='/'><img src={Logo} className='w-[110px] sm:w-[200px] object-cover' alt='Logo image' /></Link>
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
                            <NavLink to='/career' className='raleway'>Careers</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to='/contact-us'><Button>Let's Talk</Button></Link>
                    </div>
                </div>

                <div className='block lg:hidden'>
                    {isNavbar ? (
                        <IoMdClose className='text-2xl cursor-pointer' onClick={() => setIsNavbar(false)} />
                    ) : (
                        <IoMdMenu className='text-2xl cursor-pointer' onClick={() => setIsNavbar(true)} />
                    )}
                </div>
            </div>

            <div
                ref={navRef}
                className={`lg:hidden fixed top-0 left-0 w-[65%] sm:w-[50%] h-full bg-white shadow-md transition-transform duration-300 ${isNavbar ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className='flex flex-col gap-6 mt-20 p-5'>
                    <li>
                        <NavLink to='/work' className='raleway' onClick={() => setIsNavbar(false)}>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='raleway' onClick={() => setIsNavbar(false)}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/services' className='raleway' onClick={() => setIsNavbar(false)}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blogs' className='raleway' onClick={() => setIsNavbar(false)}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to='/career' className='raleway' onClick={() => setIsNavbar(false)}>Careers</NavLink>
                    </li>
                    <li>
                        <Link to='/contact-us'>
                            <Button>Let's Talk</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
