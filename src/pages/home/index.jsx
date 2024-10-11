import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OurIdeology from './OurIdeology';
import Hero from './Hero';
import OurServices from './OurServices';
import FeaturedWork from './FeaturedWork';
import ReadyToWork from './ReadyToWork';
import HomeHeader from '../../components/HomeHeader';

const Home = () => {
    return (
        <main>
            <HomeHeader />
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
