import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import HeroContainer from '../../components/HeroContainer'
import { FeaturedWorkImage2, Logo, Work1, Work10, Work11, Work2, Work3, Work4, Work5, Work6, Work7, Work8, Work9 } from '../../assets';
import Video1 from '../../assets/Videos/first.mp4';
import Video2 from '../../assets/Videos/second.mp4';
import Video3 from '../../assets/Videos/third.mp4';

const KindredCaseStudy = () => {

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const [currentVideo, setCurrentVideo] = useState(null);

    const handlePlayVideo = (ref) => {
        if (ref.current) {
            if (currentVideo && currentVideo !== ref.current) {
                currentVideo.pause();
            }

            if (ref.current.paused) {
                ref.current.play();
                setCurrentVideo(ref.current);
            } else {
                ref.current.pause();
                setCurrentVideo(null);
            }
        }
    };

    return (
        <main>
            <Header />
            <HeroContainer
                title={['Brand Identity', 'Brand Strategy', 'Web Development']}
            />

            <div className='w-full min-h-[700px] px-5 sm:px-20 pt-20'>
                <div className='w-full grid lg:grid-cols-2 gap-x-10 gap-y-5'>
                    <h2>Project Overview</h2>
                    <div className=''>
                        <h2 className='font-semibold max-w-[95%] mb-3'>Transforming Brands into Powerful Storytellers</h2>
                        <p className='text-xs leading-5'>
                            NewKindred was born from a desire to reshape the way brands engage with their audience, <br /><br />
                            The mission was clear: to create immersive brand experiences through innovative design thinking and strategic storytelling that resonate deeply with the target market.
                        </p>
                    </div>
                </div>
                <div className='h-[500px] w-full my-16'>
                    <img src={Work1} alt="" className='w-full h-full' />
                </div>
                <div className='w-full grid lg:grid-cols-2 gap-10'>
                    <h2>The Challenge</h2>
                    <div className=''>
                        <h2 className='font-semibold max-w-[95%] mb-3'>Build an impactful creative agency that transforms brands into powerful storytellers to build immersive experiences.
                        </h2>
                        <p className='text-xs leading-5'>
                            NewKindred is driven by the belief that every brand has a unique story to tell, yet many businesses need help connecting with their audiences meaningfully. 
                            <br /><br />
                            Often, brands focus primarily on sales, overlooking the potential of storytelling to build deep, lasting relationships with their customers. To achieve its vision of becoming a creative powerhouse, NewKindred sought to redefine how brands engage with their audiences through strategic design thinking and compelling narratives.
                            <br /><br />
                            NewKindred's challenge was to evolve from a new entrant into a distinct, authoritative agency that could guide brands in creating immersive experiences and building genuine connections with their audiences. 
                            <br /><br />
                            By shifting away from traditional, transactional branding approaches, NewKindred positioned itself as a leader in building brand stories that resonate deeply, inspiring change and driving growth across industries.
                        </p>
                    </div>
                </div>

                <div className='w-full min-h-[450px] flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 mt-10 mb-20'>
                    <div className='w-full lg:w-[49%] overflow-hidden rounded-lg'>
                        <img src={Work2} alt="" className='min-w-full w-full h-full object-cover' />
                    </div>
                    <div className='w-full lg:w-[49%]  flex flex-col gap-5'>
                        <div className='h-[325px] bg-black rounded-lg cursor-pointer' onClick={() => handlePlayVideo(videoRef1)}>
                            <video ref={videoRef1} className='min-w-full min-h-full rounded-lg'>
                                <source src={Video1}/>
                            </video>
                        </div>
                        <div className='h-[325px] w-full bg-black rounded-lg overflow-hidden'>
                            <img src={Work3} alt="" className='h-full w-full object-cover' />
                        </div>
                    </div>
                </div>
                <div className='w-full grid lg:grid-cols-2 gap-10'>
                    <h2>Brand Strategy</h2>
                    <div className=''>
                        <h2 className='font-semibold max-w-[95%] mb-3'>Our Approach</h2>
                        <p className='text-xs leading-5'>
                            At the heart of NewKindred's approach is a commitment to innovative design thinking and storytelling. We identified <b>three core pillars</b> that guide our work:
                            <br /><br />
                            <b>Innovative Design Thinking:</b> At the heart of what we do is the belief that every brand has a story worth telling. By applying innovative design thinking, NewKindred creates unique, memorable experiences that resonate with audiences on a deeper level.
                            <br /><br />
                            <b>Storytelling:</b> We understand that in a crowded market, it's the stories that captivate and connect. our approach is designed to empower businesses to build bold brands, helping them communicate their values, mission, and vision in a way that truly engages their audience.
                            <br /><br />
                            <b>Strategic Brand Positioning:</b> We offer valuable strategic guidance, aligning our creative strategies with business objectives to drive tangible results and growth.
                        </p>
                    </div>
                </div>
                <div className='w-full min-h-[450px] flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 mt-10 mb-20'>
                    <div className='w-full lg:w-[49%] h-[450px] overflow-hidden bg-primary rounded-lg cursor-pointer' onClick={() => handlePlayVideo(videoRef2)}>
                        <video ref={videoRef2} className='w-full h-full'>
                            <source src={Video2}/>
                        </video>
                    </div>
                    <div className='w-full lg:w-[49%] h-[450px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work4} alt="" className='object-cover h-full' />
                    </div>
                </div>
                <div className='w-full grid lg:grid-cols-2 gap-10'>
                    <h2>Verbal Identity</h2>
                    <div className=''>
                        <h2 className='font-semibold max-w-[95%] mb-3'>A distinctive Hero and Outlaw archetype with a voice that is courageous, empowering, and rebellious.</h2>
                        <p className='text-xs leading-5'>
                            We framed our brand strategy that reflects our commitment to bold creativity and transformative storytelling. 
                            <br /><br />
                            We developed a clear and compelling value proposition, infused with unique voice personas and pillars that resonate deeply with our target audience. Inspired by our mission to <b>"Shape Brand Experiences,"</b> we created a manifesto to articulate the essence, motives, and aspirations of NewKindred.
                            <br /><br />
                            This manifesto serves as a powerful tool to inject emotional depth into the brand, connecting the 'why' behind NewKindred with both our internal team, external stakeholders, and clients By embracing the Hero and Outlaw archetypes.
                            <br /><br />
                            NewKindred's brand voice is shaped to be inspiring, authentic, and daring, encouraging businesses to break free from the ordinary and embrace their full creative potential.
                        </p>
                    </div>
                </div>
                <div className='w-full min-h-[450px] flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 mt-10 mb-20'>
                    <div className='w-full lg:w-[49%] h-[450px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work5} alt="" className='object-cover h-full' />
                    </div>
                    <div className='w-full lg:w-[49%] h-[450px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work6} alt="" className='object-cover h-full' />
                    </div>
                </div>
                <div className='w-full grid lg:grid-cols-2 gap-10'>
                    <h2>Visual Identity</h2>
                    <div className=''>
                        <h2 className='font-semibold max-w-[95%] mb-3'>A dynamic brand system designed for immersive storytelling and bold creativity</h2>
                        <p className='text-xs leading-5'>
                            To position ourselves as a leader in the branding and marketing industry, we developed a visual system rooted in innovation and emotional resonance. This system incorporates dynamic elements, a bold color palette, and custom typography, creating a visually compelling and memorable brand identity. The visual identity is designed to stand out while remaining deeply aligned with the essence of NewKindred.
                            <br /><br />
                            Drawing inspiration from our brand tone pillars—<b>Courageous, Empowering, and Daring</b>—we composed a visual identity that conveys authenticity, creativity, and a fearless approach to branding. Our design language is intended to evoke a sense of empowerment, encouraging our audience to embrace their unique stories and brand narratives.
                            <br /><br />
                            This visual system is meticulously applied across every touchpoint of the NewKindred brand, from digital platforms to print materials, ensuring a cohesive and impactful brand experience.
                            <br /><br />
                            Our goal was to create a brand identity that not only reflects NewKindred's core values but also resonates with our mission to transform businesses into powerful storytellers and create lasting connections with their audiences.
                        </p>
                    </div>
                </div>
                <div className='h-[500px] w-full mt-16 mb-5 bg-primary flex items-center justify-center rounded-lg overflow-hidden cursor-pointer' onClick={() => handlePlayVideo(videoRef3)}>
                    <video ref={videoRef3} className='min-w-full w-full h-[500px]'>
                        <source src={Video3}/>
                    </video>
                </div>
                <div className='w-full min-h-[450px] grid sm:grid-cols-2 gap-5 mt-10 mb-20'>
                    <div className='h-[350px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work7} alt="" className='object-cover h-full' />
                    </div>
                    <div className='h-[350px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work8} alt="" className='object-cover h-full' />
                    </div>
                    <div className='h-[350px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work9} alt="" className='object-cover h-full' />
                    </div>
                    <div className='h-[350px] flex flex-col rounded-lg overflow-hidden gap-5'>
                        <img src={Work10} alt="" className='object-cover h-full' />
                    </div>
                </div>
                <div className='h-[300px] w-full mb-16 bg-primary flex items-center justify-center rounded-lg overflow-hidden'>
                    <img src={FeaturedWorkImage2} alt="" className='object-cover w-full h-full' />
                </div>
            </div>

            <ReadyToWork />
            <Footer />
        </main>
    )
}

export default KindredCaseStudy
