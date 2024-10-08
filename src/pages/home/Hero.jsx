import {Link} from 'react-router-dom'
import {HeroImage} from '../../assets/index';
import Button from '../../components/Button';

const Hero = () => {
    return (
        <section 
            style={{
                backgroundImage: `url(${HeroImage})`,
                height: '100vh',
                maxHeight: '800px',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            className='pt-[80px] px-5 sm:px-20'
        >
            <div className='w-full h-full text-white flex flex-col justify-center'>
                <div className='lg:max-w-[60%] text-center lg:text-left'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl mb-4 font-semibold lg:font-bold'>Shaping Brand Experiences Through Storytelling</h1>
                    <p>Businesses come to us as their starting point to innovate, shape, reimagine ideas, and create unforgettable experiences and products pushing beyond the limits of what's possible with storytelling.</p>
                    <Link to='/contact-us'><Button className='mt-5'>Let's Talk</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
