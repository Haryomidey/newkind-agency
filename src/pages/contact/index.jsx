import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ContactUs from '../../api/contact-us';
import Select from 'react-select';
import Countries from '../../api/get-countries';
import { ImSpinner } from "react-icons/im";

const Contact = () => {
    const { formData, errors, handleChange, handleSendMessage, loading } = ContactUs();
    const { countries } = Countries();
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        handleChange({
            target: {
                name: 'country',
                value: selectedOption.value
            }
        });
    };

    return (
        <main>
            <Header />
            <div className='pt-[120px] px-5 sm:px-20'>
                <h1 className='text-center font-semibold mb-4 text-2xl'>Work With Us</h1>
                <p className='text-center max-w-[650px] mx-auto'>
                    Fill out the contact form below and tell us about your vision for the project
                </p>
                <form onSubmit={handleSendMessage} className='max-w-[700px] mx-auto my-6 min-h-[600px] grid grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-4'>
                    <div className='flex flex-col gap-1 col-span-1'>
                        <label className='text-xs' htmlFor="first_name">First Name*</label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        />
                        {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
                    </div>

                    <div className='flex flex-col gap-1 col-span-1'>
                        <label className='text-xs' htmlFor="last_name">Last Name*</label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        />
                        {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="email">Email Address (Work)*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="phone_number">Phone Number</label>
                        <input
                            type="tel"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        />
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="type_of_enquiry">Type of Enquiry</label>
                        <select
                            name="type_of_enquiry"
                            value={formData.type_of_enquiry}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        >
                            <option value="" disabled>Select a type</option>
                            <option value="start_project">Start a project</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="country">Country</label>
                        <Select
                            options={countries}
                            onChange={handleCountryChange}
                            isSearchable
                            placeholder="Select your country"
                            className="text-xs"
                        />
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="company_name">Company Name</label>
                        <input
                            type="text"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                            className='p-2 h-[40px] bg-[#e0e2ea] text-xs'
                        />
                    </div>

                    <div className='flex flex-col gap-1 col-span-2'>
                        <label className='text-xs' htmlFor="project_details">Tell Us About The Project (Scope, Timeline, Budget):*</label>
                        <textarea
                            name="project_details"
                            value={formData.project_details}
                            onChange={handleChange}
                            className='p-2 h-[150px] bg-[#e0e2ea] text-xs'
                        ></textarea>
                        {errors.project_details && <p className="text-red-500 text-xs">{errors.project_details}</p>}
                    </div>

                    <div className='flex items-center gap-3 col-span-2'>
                        <input type="checkbox" name="newsletter" id="newsletter" />
                        <p className='text-xs'>I would like to receive your newsletters</p>
                    </div>

                    <div className='w-full col-span-2 sm:col-span-1'>
                        <Button className={`${loading && 'cursor-not-allowed'} w-full flex items-center justify-center`} type="submit" disabled={loading}>
                            {loading ? 
                                <ImSpinner className='spin text-2xl' /> :
                                'Send Message'
                            }
                        </Button>
                    </div>
                </form>
            </div>
            <Footer />
        </main>
    );
};

export default Contact;
