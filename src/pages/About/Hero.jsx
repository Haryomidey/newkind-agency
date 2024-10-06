import React from 'react'
import HeroContainer from '../../components/HeroContainer'

const Hero = () => {
    return (
        <div className='w-full min-h-[800px]'>
            <HeroContainer 
                title={'About'}
                detail={'We partner with businesses to build great brands, develop great products, create stories for themselves, and shape their brand experiences.'}
            />
            <div className='flex items-center justify-center min-h-[400px] py-6'>
                <div className='w-full px-5 sm:px-20 grid sm:grid-cols-2 gap-16'>
                    <p>In our world saturated with information, where voices and brands compete for attention daily, the art of storytelling often gets drowned out, leaving narratives that lack clarity and authenticity. </p>
                    <p>However, within this chaos lies a space where truth is palpable, resolution is accurate, and authenticity is relatable. It's where brands can genuinely express themselves, forging true connections with their audience.</p>
                    <p>What then defines a compelling narrative? It's the fusion of resolution, authenticity, and consistency. Yet, many brands are losing that voice. </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
