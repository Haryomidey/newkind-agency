import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Button from '../../components/Button'

const Contact = () => {
    return (
        <main>
            <Header />
            <div className='pt-[120px] px-5 sm:px-20'>
                <h1 className='text-center font-semibold mb-4 text-2xl'>Work With Us</h1>
                <p className='text-center max-w-[650px] mx-auto'>Fill out the  contact form below and tell us about your vision for the project</p>
                <form className='max-w-[700px] mx-auto my-6 min-h-[600px] grid grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-4'>
                    <div className='flex flex-col gap-1 col-span-1'>
                        <label className='text-xs' htmlFor="">First Name*</label>
                        <input
                            type="text" 
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                       />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs' htmlFor="">Last Name*</label>
                        <input
                            type="text" 
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                       />
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Email Address (Work)*</label>
                        <input
                            type="email" 
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                       />
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Phone Number</label>
                        <input
                            type="tel" 
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                       />
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Type of Enquiry</label>
                        <select
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        >
                            <option value="" disabled>Start a project</option>
                       </select>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Country</label>
                        <select
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        >
                            <option value="" disabled>Choose your country</option>
                       </select>
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Company Name</label>
                        <input
                            type="text" 
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                       />
                    </div>
                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="">Tell Us About The Project ( Scope, Timeline, Budget ):*</label>
                        <textarea
                            className='p-2 h-[150px] bg-[#e0e2ea] text-xs'
                        ></textarea>
                    </div>
                    <div className='flex items-center gap-3 col-span-2'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-xs'>l would like to receive your newsletters</p>
                    </div>
                    <div className='w-full col-span-2 sm:col-span-1'>
                        <Button className='w-full'>Send Message</Button>
                    </div>
                </form>
            </div>
            <Footer />
        </main>
    )
}

export default Contact
