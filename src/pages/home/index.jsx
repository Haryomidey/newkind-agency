import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OurIdeology from './OurIdeology';
import Hero from './Hero';
import OurServices from './OurServices';
import FeaturedWork from './FeaturedWork';
import ReadyToWork from './ReadyToWork';

const Home = () => {
    return (
        <main>
            <Header />
            <Hero />
            <OurIdeology />
            <OurServices />
            <FeaturedWork />
            <ReadyToWork />
            <Footer />
        </main>
    )
}

export default Home
