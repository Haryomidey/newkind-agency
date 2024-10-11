import React from 'react'

const HeroContainer = ({title, detail, name}) => {
  return (
    <div className='w-full h-[400px] bg-[#eff0fe] px-5 sm:px-20'>
        <div className='h-full w-full flex items-center justify-between gap-2'>
            <div className='border border-primary px-4 py-2 rounded-md text-[10px] lg:text-sm break-words'>
                {title}
            </div>
            <div className='w-1/2'>
                <h1 className='text-lg sm:text-3xl lg:text-5xl font-semibold'>{name || 'NewKindred.'}</h1>
                <p className='text-sm mt-3 hidden lg:block'>
                    {detail}
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroContainer
