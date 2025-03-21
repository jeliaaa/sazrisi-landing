import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';

const MailUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateMailtoLink = () => {
        const subject = encodeURIComponent('Feedback from ' + formData.name);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        return `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className='w-full flex justify-center mt-20 px-4'>
            <div className='w-full flex flex-col items-center gap-6 p-8 bg-gray-200 shadow-lg rounded-3xl border border-gray-300'>
                <h1 className='text-dark-color text-4xl font-bold'>მოგვწერეთ თქვენი მოსაზრება</h1>
                <p className='text-gray-600 text-lg text-center'>ჩვენი გუნდი ყოველთვის ცდილობს გაუმჯობესებას. თქვენი გამოხმაურება მნიშვნელოვანია!</p>
                <form className='w-full flex flex-col gap-4'>

                    <input
                        type='text'
                        name='name'
                        placeholder='თქვენი სახელი'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-3 border border-dark-color rounded-lg focus:outline-main-color'
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='თქვენი ელ. ფოსტა'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full p-3 border border-dark-color rounded-lg focus:outline-main-color'
                        required
                    />
                    <textarea
                        name='message'
                        placeholder='თქვენი შეტყობინება'
                        value={formData.message}
                        onChange={handleChange}
                        rows='4'
                        className='w-full p-3 border border-dark-color rounded-lg focus:outline-main-color'
                        required
                    ></textarea>
                    <a
                        href={generateMailtoLink()}
                        className='w-fit flex items-center justify-center gap-2 p-3 bg-main-color text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-dark-color'
                    >
                        გაგზავნა <BiSend size={20} />
                    </a>
                </form>
            </div>
        </div>
    );
};

export default MailUs;
