import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Main = () => {
    return (
        <div className='flex min-h-dvh w-full justify-end'>
            <Navigation />
            <div className='w-full md:w-[95%] p-4 min-h-dvh'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
