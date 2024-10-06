import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import HeroContainer from '../../components/HeroContainer'
import { Career1, Career2 } from '../../assets'

import { IoIosArrowDown } from "react-icons/io";

const Career = () => {
    return (
        <main>
            <Header />
            <HeroContainer
                title={'Career'}
                detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'}
            />

            <div className='w-full min-h-[600px] px-5 sm:px-20 pt-10'>
                <h1 className='font-semibold text-lg'>Crazy Creatives: Bullish on Storytelling</h1>
                <p>We're a team of forward-thinkers, collaborators, and partners dedicated to creating compelling narratives and impactful work alongside businesses, brands, and communities.</p>

                <div className='h-[400px] w-full mt-6'>
                    <img src={Career1} className='h-full w-full min-w-full object-cover' alt="" />
                </div>

                <div className='w-full my-10 flex justify-center'>
                    <button className='text-primary border border-primary px-6 py-3 rounded-md flex items-center justify-center gap-3'>
                        <span className='capitalize'>View open position</span>
                        <IoIosArrowDown />
                    </button>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 gap-x-10 gap-y-10 w-full my-8'>
                <div className='px-5 sm:px-20 font-normal flex flex-col gap-5 text-[12px]'>
                    <p>We work closely to create work that truly matters.</p>

                    <p>We're always on the lookout for talents from all walks of life to join our team.</p>

                    <h3 className='font-semibold text-sm'>To create immersive brand experiences.</h3>
                    <div className='flex flex-col gap-4'>
                        <p>In our studio, we believe in trying new things and exploring together.</p>

                        <p>While It's not always easy, we keep each other motivated and inspired but it's always exciting.</p>

                        <p>We're searching for fellow team members who share the same drive, have a passion for learning, and can bring positivity to our crazy space.</p>
                    </div>
                </div>
                <div className='h-[400px]'>
                    <img src={Career2} alt="" className='w-full h-full object-cover' />
                </div>
            </div>

            <div className='bg-[#ecedfe] h-[300px] w-full flex flex-col gap-4 justify-center items-center text-center px-5 sm:px-20'>
                <h3 className='max-w-[750px]'>If this excites you and you're ready to be part of these crazy dudes, explore our current openings, if you don't see yours shoot us a crazy DM.</h3>
                <a href="mailto:hello@newkindred.com" className='text-primary font-semibold text-lg sm:text-2xl'>hello@newkindred.com</a>
            </div>
            <Footer />
        </main>
    )
}

export default Career
