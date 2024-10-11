import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import HeroContainer from '../../components/HeroContainer'
import { FeaturedWorkImage2, Medsync, Phantom } from '../../assets'
import { Link } from 'react-router-dom'

const Work = () => {
    return (
        <main>
            <Header />
            <HeroContainer
                title={['Work']}
            />

            <div className='grid gap-y-16 px-5 sm:px-20 my-8'>
                {Content.map((content, index) => (
                    <div key={index} className="relative group">
                        {content.link ? (
                            <Link to={`/${content.link}`}>
                                <div className='w-full h-[350px] sm:h-[500px]'>
                                    <img src={content.image} alt="" className='w-full h-full object-cover rounded-lg transition-opacity duration-300' />
                                </div>
                                <h2 className='font-semibold mt-4'>{content.title}</h2>
                                <p className='text-[13px] my-2'>{content.detail}</p>
                                <div className='flex items-center flex-wrap gap-3'>
                                    <p className='bg-[#d1ddf7] px-5 py-2 rounded-md text-xs'>{content.tags[0]}</p>
                                    <p className='bg-[#f7eac9] px-5 py-2 rounded-md text-xs'>{content.tags[1]}</p>
                                </div>
                            </Link>
                        ) : (
                            <div className="">
                                <div className='w-full h-[350px] sm:h-[500px] relative'>
                                    <img src={content.image} alt="" className='w-full h-full object-cover rounded-lg opacity-100 group-hover:opacity-50 transition-opacity duration-300' />
                                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                        <p className="text-white text-lg font-semibold">COMING SOON</p>
                                    </div>
                                </div>
                                <h2 className='font-semibold mt-4'>{content.title}</h2>
                                <p className='text-[13px] my-2'>{content.detail}</p>
                                <div className='flex items-center flex-wrap gap-3'>
                                    <p className='bg-[#d1ddf7] px-5 py-2 rounded-md text-xs'>{content.tags[0]}</p>
                                    <p className='bg-[#f7eac9] px-5 py-2 rounded-md text-xs'>{content.tags[1]}</p>
                                </div>
                            </div>
                        )}
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
        image: FeaturedWorkImage2,
        title: 'NewKindred',
        detail: 'Building brands that shape immersive experiences',
        tags: [
            'Brand design',
            'Web design'
        ],
        link: 'blogs/new-kindred-case-study'
    },
    {
        id: 2,
        image: Medsync,
        title: 'Medsync',
        detail: 'Weaving healthcare with technology for a healthier Nigeria',
        tags: [
            'Brand design',
            'Web design'
        ],
        link: ''
    },
    {
        id: 3,
        image: Phantom,
        title: 'Phantom Wolves FC',
        detail: 'From the shadows, We strike as one',
        tags: [
            'Brand design',
            'Web design'
        ],
        link: ''
    },
]
