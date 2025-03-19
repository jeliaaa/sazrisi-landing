import React from 'react'
import Card from './ReusableComponents/Card'
import math from '../assets/math.png'

const Services = () => {
    const services = [
        { title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: math },
        { title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: math },
        { title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: math }
    ]
    return (
        <div className='flex items-center justify-center gap-x-15 gap-y-5 w-full flex-wrap p-1'>
            {services.map((card, _id) => (
                <Card key={_id} cardObject={card} />
            ))}
        </div>
    )
}

export default Services