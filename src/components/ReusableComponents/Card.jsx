import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import Button from './Button'

const Card = ({ cardObject }) => {
    return (
        <div className='border-dark-color border-2 hover:-translate-y-10 transition-all delay-150 rounded-md h-[470px] min-w-[250px] boxo max-w-[400px] p-5 flex flex-col items-center'>
            <div className='flex flex-col items-center h-[70%]'>
                <h1 className='text-center text-dark-color text-5xl'>{cardObject.title}</h1>
                <img src={cardObject.img} className='w-[60%] mt-5 ' />
            </div>
            <p className='mt-5'>{cardObject.description}</p>
            <Button className='flex items-center mt-5 gap-x-2 text-main-color! bg-dark-color px-4 py-2 rounded-md'> 
                <FaArrowCircleRight className='-rotate-45 text-3xl' />
                მეტის ნახვა...
            </Button>
        </div>
    )
}

export default Card 