import React from 'react'
import HeadingTitle from '../../components/HeadingTitle'
import { Link } from 'react-router-dom'
import { BrandEngagement, Branding, Development, Strategy } from '../../assets'
import Button from '../../components/Button'

const OurServices = () => {
    return (
        <div className='w-full min-h-[500px] px-5 sm:px-20'>
            <HeadingTitle>Our Services</HeadingTitle>
            <div className='flex justify-between'>
                <p className='max-w-[750px]'>We partner with clients to develop memorable brands that create connection and inspire change.</p>
                <Link>See All</Link>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-1'>
                {
                    Content.map((content, index) => (
                        <div className={`rounded-md h-[400px] ${index % 2 === 0 ? 'bg-[#f9eed0]' : 'bg-[#d3e1fe]'} flex items-center justify-center`}>
                            <img src={content.image} />
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center my-6'>
                <Button>Let's Talk</Button>
            </div>
        </div>
    )
}

export default OurServices

const Content = [
    {
        id: 1,
        image: Branding,
    },
    {
        id: 2,
        image: Strategy,
    },
    {
        id: 3,
        image: Development,
    },
    {
        id: 4,
        image: BrandEngagement,
    },
]