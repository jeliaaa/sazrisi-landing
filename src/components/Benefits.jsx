import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Element } from 'react-scroll'

const Benefits = () => {
    return (
        <Element name='benefits' id='benefits' className='w-full px-4'>
            <div className='flex flex-col bg-dark-color h-fit xl:h-[400px] py-8 px-10 items-center justify-between rounded-4xl'>
                <div className='w-full box-border text-gray-100 gap-y-5 flex flex-col lg:flex-row justify-center items-center'>
                    <div className='lg:w-1/3 h-full px-3'>
                        <h1 className='text-lg text-main-color border-l-4 border-main-color pl-3 mb-4'>ოპტიმიზაცია</h1>
                        <p className='w-full'>
                            თქვენს აკადემიურ მოსწრებასა და შედეგებზე მორგებული სასწავლო გეგმა, რომელიც მუდმივად იცვლება ტესტირებებზე დაყრდნობით.
                            ხელოვნური ინტელექტის საშუალებით შედეგების მონიტორინგი და მონაცემთა კონკრეტული ანალიტიკა.
                        </p>
                    </div>
                    <div className='lg:w-1/3 h-full border-y py-8 px-3 lg:py-0 lg:px-8 lg:border-y-0 lg:border-x border-gray-100'>
                        <h1 className='text-lg text-main-color border-l-4 border-main-color pl-3 mb-4'>ყველაფერი ერთ სივრცეში</h1>
                        <p className='w-full'>
                            ჩვენი პლატფორმა გთავაზობთ პროფესიონალების მიერ შედგენილ საგამოცდო და მოსამზადებელ მასალას. პლატფორმაზე განთავსდება ვიდეო-გაკვეთილები
                            რომლებიც თქვენ მოგეწოდებათ შესრულებული ტესტების შედეგების მიხედვით. ჩვენთან არსებული გამოცდები, უნიკალურია და შედგენილია პროფესიონალების მიერ.
                        </p>
                    </div>
                    <div className='lg:w-1/3 h-full px-3'>
                        <h1 className='text-lg text-main-color border-l-4 border-main-color pl-3 mb-4'>სასიამოვნო სწავლის პროცესი</h1>
                        <p className='w-full'>
                            ჩვენი პლატფორმა მომხმარებელს სთავაზობს სხვადასხვა სახის წამახალისებელ აქტივობას, იქნება ეს ყოველდღიური მოკლე ქუიზები, 
                            მოსწავლეებს შორის მოწყობილი კონკურსები, გათამაშებები და სხვა. 
                        </p>
                    </div>
                </div>
                {/* <a className='text-main-color flex gap-1 mt-5 cursor-pointer border-2 border-main-color rounded-md p-3'>გაიგე მეტი <FaChevronRight className='-rotate-45' /></a> */}
            </div>
        </Element>
    )
}

export default Benefits