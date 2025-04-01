import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { BiLogOut } from 'react-icons/bi';
import { GrDocument } from 'react-icons/gr';
import { FaGear } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { MdLeaderboard } from 'react-icons/md';

const Navigation = () => {
    return (
        <>
            {/* Sidebar for larger screens */}
            <div className='fixed top-0 left-0 h-full w-16 bg-gray-900 text-white flex-col items-center py-4 gap-6 hidden md:flex'>
                <Link to={'/app/main'}>
                    <img src={logo} className='w-6' alt='...' />
                </Link>
                <Link to='tests' className='relative group'>
                    <GrDocument size={24} className='hover:text-gray-400' />
                    <span className='absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>ტესტები</span>
                </Link>
                <Link to='leaderboard' className='relative group'>
                    <MdLeaderboard size={24} className='hover:text-gray-400' />
                    <span className='absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>ლიდერბორდი</span>
                </Link>
                <Link to='settings' className='relative group'>
                    <FaGear size={24} className='hover:text-gray-400' />
                    <span className='absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>პარამეტრები</span>
                </Link>
                <div className='flex flex-col gap-y-5 absolute bottom-5 items-center'>
                    <Link to={'profile'}>
                        <img src="https://picsum.photos/100" className='w-10 aspect-square rounded-full' alt="" />
                    </Link>
                    <Link to='/' className='group'>
                        <BiLogOut size={24} className='hover:text-gray-400' />
                        <span className='absolute left-12 bottom-0 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity'>გამოსვლა</span>
                    </Link>
                </div>
            </div>

            {/* Bottom nav for smaller screens */}
            <div className='fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around py-2 md:hidden'>
                <Link to='/' className='flex flex-col gap-y-2 items-center text-xs'>
                    <GrDocument size={20} />
                    ტესტები
                </Link>
                <Link to='/information' className='flex flex-col gap-y-2 items-center text-xs'>
                    <FaGear size={20} />
                    პარამეტრები
                </Link>
                <Link to='/app/login' className='flex flex-col gap-y-2 items-center text-xs'>
                    <CgProfile size={20} />
                    პროფილი
                </Link>
                <Link to='/information' className='flex flex-col gap-y-2 items-center text-xs'>
                    <MdLeaderboard size={20} />
                    ლიდერბორდი
                </Link>
                <Link to='/app/register' className='flex flex-col gap-y-2 items-center text-xs'>
                    <BiLogOut size={20} />
                    გასვლა
                </Link>
            </div>
        </>
    );
};

export default Navigation;