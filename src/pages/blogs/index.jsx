import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import HeroContainer from '../../components/HeroContainer'
import { Blog1, Blog2, Blog3, Blog4 } from '../../assets'

const Blogs = () => {
    return (
        <main>
            <Header />
            <HeroContainer 
                title={'Blog'}
                detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'}
            />
            <div className='w-full py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 min-h-[800px] px-5 sm:px-20'>
                {Content.map((content, index) => (
                    <div className='min-h-[350px]'>
                        <div className='h-[350px]'>
                            <img src={content.image} alt="" className='rounded-md w-full h-full object-cover' />
                        </div>
                        <h3 className='mt-2 text-xs'>{content.title}</h3>
                    </div>
                ))}
            </div>
            <ReadyToWork />
            <Footer />
        </main>
    )
}

export default Blogs

const Content = [
    {
        id: 1,
        image: Blog1,
        title: 'Establishing a strong brand identity'
    },
    {
        id: 2,
        image: Blog2,
        title: 'Enhancing SEO for Business: 8 Strategies for Improved Visibility'
    },
    {
        id: 3,
        image: Blog3,
        title: 'Communicating Value in the SaaS Industry: Branding Strategies for Small and Medium-Sized B2B Brands'
    },
    {
        id: 4,
        image: Blog4,
        title: 'Establishing a Strong Brand Identity: Key Steps and Considerations'
    },
]