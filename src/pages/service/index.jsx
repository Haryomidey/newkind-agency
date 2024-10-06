import React from 'react'
import Header from '../../components/Header'
import HeroContainer from '../../components/HeroContainer'
import Footer from '../../components/Footer'

const Services = () => {
    return (
        <main>
            <Header />
            <HeroContainer 
                title={'Services'}
                detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'}
            />
            <section className='py-10 px-5 sm:px-20 bg-[#edeff2]'>
                <h2 className='font-semibold text-xl mb-3'>We help businesses build strong brands, develop standout products, and craft compelling stories</h2>
                <p className='font-normal text-xs'>We understand that authentic storytelling often gets lost, this is why we bring clarity and authenticity back to your brand's narrative. Our mission is to team up with businesses to express their true essence and connect genuinely with their audience.
                </p>
                <button className='px-5 py-2 rounded-md border border-[#d9d9d9] bg-[#e2e2fb] mt-3'>What we do</button>
                <p className='font-semibold text-3xl my-5'>=</p>

                <div className='flex flex-col gap-10'>
                    <div className='w-full flex justify-between flex-wrap'>
                        <div>
                            <h3 className='font-semibold text-xl'>Strategy</h3>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Market Research & Analysis</li>
                                <li className='list-disc'>Brand Architecture</li>
                                <li className='list-disc'>Business Strategy & Planning</li>
                                <li className='list-disc'>Competitive Strategy Development</li>
                                <li className='list-disc'>Data Analytics & Visualization</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Brand Strategy & Positioning</li>
                                <li className='list-disc'>Naming & Nomenclature</li>
                                <li className='list-disc'>Brand Communication Strategy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-between flex-wrap'>
                        <div>
                            <h3 className='font-semibold text-xl'>Branding</h3>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Brand Identity Developments</li>
                                <li className='list-disc'>Brand Management</li>
                                <li className='list-disc'>Business Strategy & Planning</li>
                                <li className='list-disc'>Tagline and Slogan Development</li>
                                <li className='list-disc'>Brand Guidelines</li>
                                <li className='list-disc'>Merchandising Design</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Verbal Identity</li>
                                <li className='list-disc'>Sound Identity</li>
                                <li className='list-disc'>Brand Vision and Mission Development</li>
                                <li className='list-disc'>Packaging Design</li>
                                <li className='list-disc'>Motion & Graphic Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-between flex-wrap'>
                        <div>
                            <h3 className='font-semibold text-xl'>Brand Engagement </h3>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Campaign Ads Development</li>
                                <li className='list-disc'>Event Branding</li>
                                <li className='list-disc'>Print Advertising</li>
                                <li className='list-disc'>Brand & Sports Activations </li>
                                <li className='list-disc'>Social Media Management</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Experiential Marketing</li>
                                <li className='list-disc'>Employee Branding</li>
                                <li className='list-disc'>Product Launch Campaigns</li>
                                <li className='list-disc'>Public & Media Relations</li>
                                <li className='list-disc'>Branded Environments</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-between flex-wrap'>
                        <div>
                            <h3 className='font-semibold text-xl'>Marketing</h3>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Social Media Marketing</li>
                                <li className='list-disc'>SEO & SEM</li>
                                <li className='list-disc'>Email Marketing</li>
                                <li className='list-disc'>Paid Advertising</li>
                                <li className='list-disc'>Influencer Marketing</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Market Research</li>
                                <li className='list-disc'>Marketing Analytics</li>
                                <li className='list-disc'>GTM (Go to Market) Strategy</li>
                                <li className='list-disc'>RTM (Ready to Market) Strategy</li>
                                <li className='list-disc'>Content Strategy & Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div>
                            <h3 className='font-semibold text-xl'>Development</h3>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='list-disc'>Website Design and Development</li>
                                <li className='list-disc'>App Development</li>
                                <li className='list-disc'>Product Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Services
