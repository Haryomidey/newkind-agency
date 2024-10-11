import React, { useState, useEffect } from 'react'
import HeadingTitle from '../../components/HeadingTitle'
import { Medsync, FeaturedWorkImage2 } from '../../assets'
import { Link } from 'react-router-dom'

const FeaturedWork = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSlideChange = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0))
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const slideTranslate = currentSlide * -100

    return (
        <div className='w-full px-5 sm:px-20 py-20'>
            <div className='mx-auto max-w-[900px] text-center'>
                <HeadingTitle>Featured Work</HeadingTitle>
                <p>We believe that brands are more than just products; they're stories waiting to be told.</p>
            </div>
            <div className='relative w-full'>
                <div className='absolute right-[5%] top-[10%] z-[11] text-white cursor-pointer select-none'>
                    <div className='flex items-center gap-3' onClick={() => handleSlideChange(currentSlide === 0 ? 1 : 0)}>
                        <p className={`w-[40px] h-1 bg-white ${currentSlide === 0 ? 'opacity-100' : 'opacity-50'}`}></p>
                        <p className={`w-[40px] h-1 bg-white ${currentSlide === 1 ? 'opacity-100' : 'opacity-50'}`}></p>
                    </div>
                    <p className='text-right mt-2'>{currentSlide + 1}/2</p>
                </div>
                <div className='w-full flex gap-3 overflow-x-hidden'>
                    <div
                        style={{
                            transform: `translateX(${slideTranslate}%)`,
                        }}
                        className='flex w-full h-full transition-transform ease duration-300'
                    >
                        <Link to='/work/new-kindred-case-study'
                            style={{
                                backgroundImage: `url(${FeaturedWorkImage2})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: '500px',
                            }}
                            className='min-w-full mt-6 flex justify-center px-7 text-white flex-col rounded-lg sm:rounded-3xl sm:text-left text-center'
                        >
                        </Link>
                        <div
                            style={{
                                backgroundImage: `url(${Medsync})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                height: '500px',
                            }}
                            className='min-w-full mt-6 flex justify-center px-7 text-white flex-col rounded-lg sm:rounded-3xl sm:text-left text-center'
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWork
