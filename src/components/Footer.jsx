import React from 'react'
import logo from "../assets/logo.png"
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='flex items-center justify-center flex-col w-full bg-dark-color mt-20 text-white'>
            <footer className="w-full box-border">
                <div className="container mx-auto flex sm:flex-row flex-col gap-y-5 items-center justify-between py-10 p-4 sm:items-start">
                    <div className='flex flex-col gap-y-8'>
                        <div className='flex items-end gap-x-3'>
                            <img src={logo} alt="logo" className="w-10" />
                            <span className='text-3xl'>Sazrisi</span>
                        </div>
                        <div className='flex gap-x-2 justify-center sm:justify-start'>
                            <a href="https://instagram.com" className="bg-gray-200 p-3 rounded-full group">
                                <BsInstagram className='text-main-color group-hover:text-dark-color' />
                            </a>
                            <a href="https://instagram.com" className="bg-gray-200 p-3 rounded-full group">
                                <BsInstagram className='text-main-color group-hover:text-dark-color' />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-start space-y-3">
                        <a href="#" className="hover:text-gray-400">მთავარი</a>
                        <a href="#" className="hover:text-gray-400">მომსახურებები</a>
                        <a href="#" className="hover:text-gray-400">მიდგომები</a>
                        <a href="#" className="hover:text-gray-400">შეფასება</a>
                    </div>
                </div>
            </footer>
            <div className="bg-dark-color py-4 w-full border-t px-3 border-gray-300">
                <div className="container mx-auto text-center flex sm:flex-row flex-col gap-y-5 justify-between">
                    <p className="text-lg"><a href="mailto:info@company.com" className="hover:text-gray-400">info@company.com</a></p>
                    <p className="text-lg">All Rights Reserved &copy;</p>
                    <p className="text-lg"><a href="tel:+123456789" className="hover:text-gray-400">+1 234-567-89</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer