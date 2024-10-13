import React from 'react'
import HeadingTitle from '../../components/HeadingTitle'
import { Link } from 'react-router-dom'
import { BrandEngagement, Branding, Development, Strategy } from '../../assets'
import Button from '../../components/Button'

const OurServices = () => {
    return (
        <div className='w-full min-h-[500px] px-5 sm:px-20'>
            <HeadingTitle>Our Services</HeadingTitle>
            <div className='flex justify-between gap-5 flex-wrap'>
                <p className='max-w-[750px] text-xs'>We partner with clients to develop memorable brands that create connection and inspire change.</p>
                {/* <Link to='/services' className='hover:underline text-primary'>See All</Link> */}
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-1'>
                {
                    Content.map((content, index) => (
                        <div key={index} className={`rounded-md min-h-[400px] pb-5 ${index % 2 === 0 ? 'bg-[#f9eed0]' : 'bg-[#d3e1fe]'} flex items-center justify-center flex-col gap-5`}>
                            <div className='w-[80%] p-5'>
                                <img src={content.image} className='w-full h-full' />
                            </div>
                            <p>{content.content}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center justify-center my-6'>
                <Link to='/contact-us'><Button className='mt-5'>Let's Talk</Button></Link>
            </div>
        </div>
    )
}

export default OurServices

const Content = [
    {
        id: 1,
        image: Branding,
        content: 'Branding'
    },
    {
        id: 2,
        image: Strategy,
        content: 'Strategy'
    },
    {
        id: 3,
        image: Development,
        content: 'Development'
    },
    {
        id: 4,
        image: BrandEngagement,
        content: 'Brand Engagement'
    },
]