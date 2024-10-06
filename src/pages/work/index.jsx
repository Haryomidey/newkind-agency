import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import HeroContainer from '../../components/HeroContainer'
import { Work1, Work2, Work3 } from '../../assets'

const Work = () => {
    return (
        <main>
            <Header />
            <HeroContainer
                title={'Featured Work'}
                detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'}
            />

            <div className='grid gap-y-16 px-5 sm:px-20 my-8'>
                {Content.map((content, index) => (
                    <div key={index}>
                        <div className='w-full h-[350px] sm:h-[500px]'>
                            <img src={content.image} alt="" className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <h2 className='font-semibold mt-4'>{content.title}</h2>
                        <p className='text-[13px] my-2'>{content.detail}</p>
                        <div className='flex items-center flex-wrap gap-3'>
                            <p className='bg-[#d1ddf7] px-5 py-2 rounded-md text-xs'>{content.tags[0]}</p>
                            <p className='bg-[#f7eac9] px-5 py-2 rounded-md text-xs'>{content.tags[1]}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ReadyToWork />
            <Footer />
        </main>
    )
}

export default Work

const Content = [
    {
        id: 1,
        image: Work1,
        title: 'Footprint World AI',
        detail: 'Empowering africa through artificial intelligence',
        tags: [
            'Brand design',
            'Web design'
        ]
    },
    {
        id: 2,
        image: Work2,
        title: 'African AI Network',
        detail: 'Empowering africa through artificial intelligence',
        tags: [
            'Brand design',
            'Web design'
        ]
    },
    {
        id: 3,
        image: Work3,
        title: 'Medsync',
        detail: 'Weaving healthcare with technology for a healthier Nigeria',
        tags: [
            'Brand design',
            'Web design'
        ]
    },
]
