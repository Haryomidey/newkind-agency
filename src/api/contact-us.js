import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        type_of_enquiry: '',
        country: '',
        company_name: '',
        project_details: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        const { first_name, last_name, email, project_details } = formData;

        if (first_name.trim() === '') {
            newErrors.first_name = 'First name is required';
            isValid = false;
        }
        if (last_name.trim() === '') {
            newErrors.last_name = 'Last name is required';
            isValid = false;
        }
        if (email.trim() === '') {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (project_details.trim() === '') {
            newErrors.project_details = 'Project details are required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:3000/api/contact-us', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const data = await res.json();

                if (res.ok) {
                    toast.success('Message sent successfully!');
                } else {
                    throw new Error(data.message || 'Failed to send message');
                }
            } catch (error) {
                toast.error(error.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        } else {
            toast.error('Please fill out the required fields');
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSendMessage,
        loading
    };
};

export default ContactUs;
