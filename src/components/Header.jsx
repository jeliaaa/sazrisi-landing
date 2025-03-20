import React, { useState } from 'react';
import logo from "../assets/logo.png";
import Button from './ReusableComponents/Button';
import { FaBars } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Header = () => {
    // State to handle sidebar toggle
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle sidebar function
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div>
            {/* Header Section */}
            <div className={`w-full flex items-center justify-between px-15 py-5 transition-all`}>
                <div className='flex items-end gap-x-3'>
                    <img src={logo} alt="logo" className="w-10" />
                    <span className='text-3xl text-dark-color'>Sazrisi</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <Button title={'დავიწყოთ'} className='hidden md:block' />
                    <button className='h-full border-2 border-dark-color p-3 rounded-md cursor-pointer' onClick={toggleSidebar}>
                        {isSidebarOpen ? <FaX className='text-2xl' /> : <FaBars className='text-2xl' />}
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full bg-dark-color z-50 text-gray-100 w-100 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-5">
                    <img src={logo} alt="logo" className="w-8" />
                    <FaX className='text-2xl text-gray-100 cursor-pointer' onClick={toggleSidebar} />
                </div>
                <nav className="flex flex-col space-y-4 px-5">
                    <a href="#" className="text-xl border-b border-dark-color transition-all delay-75 hover:border-b-main-color">სერვისები</a>
                    <a href="#" className="text-xl border-b border-dark-color transition-all delay-75 hover:border-b-main-color">ბენეფიტები</a>
                    <a href="#" className="text-xl border-b border-dark-color transition-all delay-75 hover:border-b-main-color">შეფასებები</a>
                    <a href="#" className="text-xl border-b border-dark-color transition-all delay-75 hover:border-b-main-color">კონტაქტი</a>
                </nav>
                <Button title={'დავიწყოთ'} className='bg-gray-100 text-dark-color! m-5 hover:bg-gray-100 block md:hidden' />
            </div>
        </div>
    );
}

export default Header;
