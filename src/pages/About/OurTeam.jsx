import React from 'react'
import { About1, About2, About3, About4, BrandDesigner, DevLead, GraphicDesigner } from '../../assets';
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const OurTeam = () => {
    return (
        <section className='w-full pt-10 px-5 sm:px-20'>
            <h1 className='text-xl sm:text-3xl'>Meet Our Team</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6'>
                {
                    Content.map((content, index) => (
                        <div key={index} className='min-h-[300px]'>
                            <div className='bg-[#00000071] h-[300px]'>
                                <img src={content.image} alt="" className='w-full h-full object-cover' />
                            </div>
                            <h2 className='mt-3'>{content.name}</h2>
                            <p className='text-[10px] my-2'>{content.role}</p>
                            <div className='flex gap-2'>
                                <Link to={content.social[0].twitter}>
                                    <FaSquareXTwitter />
                                </Link>
                                <Link to={content.social[0].linkedIn}>
                                    <FaLinkedin />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='pt-20 pb-14 flex items-center justify-center'>
                <Button>Shuffle</Button>
            </div>
            <div className='flex items-center justify-center min-h-[400px]'>
                <div className='w-full h-full grid lg:grid-cols-2 gap-16 pb-4'>
                    <p>At NewKindred, we specialize in building these spaces. Through our approach, we challenge businesses to embody their true essence and become <b>storytellers</b>.</p>
                    <p>NewKindred is a Branding and Marketing Agency. We partner with and assist businesses in building bold brands, creating immersive experiences, and becoming storytellers.</p>
                    <p>Our mission is crystal clear to guide businesses in building genuine, relatable brands.</p>
                </div>
            </div>
        </section>
    )
}

export default OurTeam;

const Content = [
    {
        id: 1,
        image: About1,
        name: 'Ajayi Vlad',
        role: 'Brand Designer',
        social: [
            { twitter: '#' },
            { linkedIn: '#' },
        ]
    },
    {
        id: 2,
        image: About2,
        name: 'Victoria Olajide',
        role: 'Partner, Creative Director',
        social: [
            { twitter: '#' },
            { linkedIn: '#' },
        ]
    },
    {
        id: 3,
        image: About3,
        name: 'Kenneth Iruonagbe',
        role: 'Partner, Marketing Director',
        social: [
            { twitter: '#' },
            { linkedIn: '#' },
        ]
    },
    {
        id: 4,
        image: About4,
        name: 'Prince Nwagboso',
        role: 'Managing Partner',
        social: [
            { twitter: '#' },
            { linkedIn: '#' },
        ]
    },
]