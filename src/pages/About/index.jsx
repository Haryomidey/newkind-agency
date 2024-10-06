import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ReadyToWork from '../home/ReadyToWork'
import Hero from './Hero'
import SecondSection from './SecondSection'
import OurTeam from './OurTeam'

const About = () => {
    return (
        <main>
            <Header />
            <Hero />
            <SecondSection />
            <OurTeam />
            <ReadyToWork />
            <Footer />
        </main>
    )
}

export default About
