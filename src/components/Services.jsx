import React from 'react'
import Card from './ReusableComponents/Card'
import math from '../assets/vectors/math.png'
import english from '../assets/vectors/english.png'
import physics from '../assets/vectors/physics.png'

const Services = () => {
    const services = [
        { title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: math },
        { title: "ინგლისური", description: "ჩვენს ონლაინ-პლატფორმაზე ინგლისური ენის 70-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: english },
        { title: "მათემატიკა", description: "ჩვენს ონლაინ-პლატფორმაზე მათემატიკის 30-ზე მეტი, უნიკალური ტესტის ეგზემპლარია.", img: physics }
    ]
    return (
        <div className='flex items-center justify-center gap-x-15 gap-y-5 w-full flex-wrap p-3'>
            {services.map((card, _id) => (
                <Card key={_id} cardObject={card} />
            ))}
        </div>
    )
}

export default Services