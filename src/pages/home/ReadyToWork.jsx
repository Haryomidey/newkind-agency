import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ReadyToWork = () => {
    return (
        <div className='bg-[#edeefe] w-full px-5 sm:px-20 py-20'>
            <h1 className='text-2xl sm:text-4xl lg:text-[60px] font-semibold'>Ready to Work?</h1>
            <Link to='/contact-us'>
                <button className='flex items-center justify-center gap-3 px-4 py-2 mt-3 rounded-md text-primary border border-primary'>
                    <p>Start a Project</p>
                    <FaArrowRightLong />
                </button>
            </Link>
        </div>
    )
}

export default ReadyToWork
