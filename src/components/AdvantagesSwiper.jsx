import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { FaBolt, FaUser } from 'react-icons/fa';
import { HiComputerDesktop } from 'react-icons/hi2';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdForum } from 'react-icons/md';


const advantages = [
    { icon: <HiComputerDesktop size={40} className='text-green-500' />, text: 'მოქნილი ონლაინ-პლატფორმა' },
    { icon: <FaBolt size={40} className='text-yellow-500' />, text: 'სწრაფი შედეგი' },
    { icon: <FaUser size={40} className='text-blue-500' />, text: 'ოპტიმიზირებული მიდგომა' },
    { icon: <GiArtificialIntelligence size={40} className='text-orange-500' />, text: 'AI იმპლემენტაცია' },
    { icon: <MdForum size={40} className='text-red-500' />, text: 'კომფორტული ფორუმი' },
];

const AdvantageSwiper = () => {
    return (
        <div className='w-full p-4 mt-10 mx-auto overflow-hidden rounded-md'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {advantages.map((advantage, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center justify-center p-8 text-center rounded-md bg-white shadow-md'>
                            {advantage.icon}
                            <p className='mt-4 text-lg font-semibold text-gray-700'>{advantage.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AdvantageSwiper;
