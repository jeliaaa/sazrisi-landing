import React from 'react'
import { Link } from 'react-router-dom'
import exams from '../assets/vectors/exams.png'

const WhatYouGet = () => {
    return (
        <div className='w-full flex box-border h-[300px] mt-20 px-30 bg-gray-200 rounded-4xl'>
            <div className="w-1/2 py-15 flex flex-col gap-5 items-start">
                <h1 className='text-dark-color text-3xl'>რომელი ტესტისთვის გსურს მომზადება?</h1>
                <p>ჩვენს ონლაინ-პლატფორმასთან ერთად, შენ, შენი მეგობარი თუ ნებისმიერი სხვა მსურველი შეძლებთ მაქსიმალურად ნაყოფიერად და კომფორტულად მოემზადოთ სასურველი გამოცდებისთვის. იხილეთ ჩვენთან არსებული საგამოცდო პროგრამების ჩამონათვალი, რომელიც მუდმივად იზრდება.</p>
                <Link className='underline hover:text-main-color' to={'/test'}>საგამოცდო პროგრამები</Link>
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <img src={exams} className='h-4/5' alt='...'/>
            </div>
        </div>
    )
}

export default WhatYouGet