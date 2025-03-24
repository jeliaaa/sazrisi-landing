import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card = ({ cardObject }) => {
    const nav = useNavigate();
    return (
        <div className={`relative border-dark-color border-2 ${!cardObject.disabled && 'hover:border-main-color'} transition-all delay-150 rounded-md h-[470px] min-w-[250px] boxo max-w-[400px] p-5 flex flex-col items-center`}>
            {/* Gray Overlay when disabled */}
            {cardObject.disabled && (
                <>
                    <div className="absolute inset-0 bg-gray-300 z-3 opacity-50 flex items-center justify-center rounded-md"></div>
                    <div className='absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-dark-color text-gray-50 p-3'>
                        მალე დაემატება
                    </div>
                </>
            )}

            <div className='flex flex-col items-center h-[70%]'>
                <h1 className='text-center text-dark-color text-5xl'>{cardObject.title}</h1>
                <img src={cardObject.img} className='w-[60%] mt-5 ' />
            </div>
            <p className='mt-5'>{cardObject.description}</p>

            <Button
                className={`flex items-center mt-5 gap-x-2 text-main-color! bg-dark-color px-4 py-2 rounded-md 
                    ${cardObject.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={cardObject.disabled}
                onClick={() => nav("/information")}
            >
                <FaArrowCircleRight className='-rotate-45 text-3xl' />
                მეტის ნახვა...
            </Button>
        </div>
    )
}

export default Card
