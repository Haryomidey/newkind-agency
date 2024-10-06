import React from 'react'
import HeadingTitle from '../../components/HeadingTitle'
import { FeaturedWorkImage } from '../../assets'

const FeaturedWork = () => {
    return (
        <div className='w-full px-5 sm:px-20 py-20'>
            <div className='mx-auto max-w-[900px] text-center'>
                <HeadingTitle>Featured Work</HeadingTitle>
                <p>We believe that brands are more than just products; they're stories waiting to be told.</p>
            </div>
            <div
                style={{
                    backgroundImage: `url(${FeaturedWorkImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '500px',
                }}
                className='mt-6 flex justify-center px-7 text-white flex-col rounded-lg sm:rounded-3xl sm:text-left text-center'
            >
                <h2 className='text-2xl mb-3'>Footprint World Al</h2>
                <p className='text-[12px]'>Innovating Today For A Smarter Tomorrow</p>
            </div>
        </div>
    )
}

export default FeaturedWork
