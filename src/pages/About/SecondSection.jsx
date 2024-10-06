import React from 'react';
import { Elephant } from '../../assets';

const SecondSection = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Elephant})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'hue',
      }}
      className='h-[400px] sm:h-[600px]'
    >
        <div className='bg-[#00000083] w-full h-full flex items-center justify-center text-right text-white px-5 sm:px-20'>
            <h1 className='max-w-[850px] mx-auto sm:text-3xl sm:leading-snug'> A COLLECTIVE OF CREATIVES PUSHING BEYOND THE LIMITS OF WHAT'S POSSIBLE WITH STORYTELLING.</h1>
        </div>
    </div>
  );
};

export default SecondSection;
