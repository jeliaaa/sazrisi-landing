import React from 'react';
import { Link } from 'react-router-dom';
import leftPart from '../assets/vectors/form_icon_left_part.png';
import rightPart from '../assets/vectors/form_icon_right_part.png';

const FeedbackSection = () => {
    return (
        <div className='w-full px-4'>
            <div className='w-full flex box-border 2xl:h-[300px] mt-20 px-10 lg:px-30 bg-gray-200 rounded-4xl'>
                <div className="w-full md:w-1/2 py-15 flex flex-col gap-5 items-start">
                    <h1 className='md:border-l-8 md:pl-5 border-main-color  text-dark-color text-3xl'>დაგვეხმარეთ ჩვენი ვებსაიტის გაუმჯობესებაში</h1>
                    <p>თქვენი გამოხმაურება ჩვენთვის ძალიან მნიშვნელოვანია! გთხოვთ, შეავსოთ ფორმა, რათა გავაუმჯობესოთ ჩვენი პლატფორმა და შემოგთავაზოთ კიდევ უფრო კომფორტული და სასარგებლო გამოცდილება.</p>
                    <Link className='underline hover:text-main-color' to={'https://docs.google.com/forms/d/e/1FAIpQLSfZ-SqZoEyH72Va02IN4LffY7FUIiRKsLNd_W6EK2e9Vv__Qw/viewform'} target='_blank'>შეავსეთ ფორმა</Link>
                </div>
                <div className="hidden md:flex w-1/2 items-center justify-end">
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfZ-SqZoEyH72Va02IN4LffY7FUIiRKsLNd_W6EK2e9Vv__Qw/viewform' target='_blank' className='w-[180px] relative group cursor-pointer'>
                        <div className='absolute bg-main-color blur-xl opacity-15 z-0 w-full aspect-square hidden group-hover:block'></div>
                        <img src={leftPart} className='w-full group-hover:-translate-x-5 z-10 transition-all delay-100' alt='...' />
                        <img src={rightPart} className='absolute -bottom-4 -right-8 w-3/4 group-hover:-right-15 transition-all delay-100' alt='...' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
