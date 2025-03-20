import React from 'react'
import Card from './ReusableComponents/Card'
import math from '../assets/vectors/math.png'
import english from '../assets/vectors/english.png'
import physics from '../assets/vectors/physics.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
    const services = [
        { disabled : false, title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: math },
        { disabled : false, title: "ინგლისური", description: "ჩვენს ონლაინ-პლატფორმაზე ინგლისური ენის 70-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: english },
        { disabled : false, title: "ფიზიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: physics },
        { disabled : true, title: "ქიმია", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: physics },
        { disabled : true, title: "ბიოლოგია", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: physics }



    ]
    return (
        <div className='flex items-center justify-center gap-x-15 gap-y-5 w-full flex-wrap p-3'>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerGroup={1}  // Move 1 slide at a time
                spaceBetween={20}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1, slidesPerGroup: 1 },
                    640: { slidesPerView: 2, slidesPerGroup: 1 },
                    1024: { slidesPerView: 3, slidesPerGroup: 1 },
                }}
                className="w-full h-[520px]"
            >
                {services.map((card, index) => (
                    <SwiperSlide key={index} className='flex! justify-center'>
                        <Card cardObject={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Services