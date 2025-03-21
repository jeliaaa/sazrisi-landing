import React from 'react'
import Button from './ReusableComponents/Button'
import mainBanner from '../assets/main_banner.png'
import { FaChevronDown } from 'react-icons/fa'

const MainHero = () => {
    return (
        <div className='w-[99%] flex justify-center'>
            <div className='relative w-full pt-50 md:pt-0 flex items-center md:bg-cover bg-[80%] h-[500px]' style={{ backgroundImage: `url(${mainBanner})` }}>
                <div className='flex absolute md:ml-7 flex-col items-center md:items-start'>
                    <div className='w-[90%] md:w-[70%]'>
                        <h1 className='text-2xl md:text-5xl bg-gray-100 rounded-md text-center md:text-start md:bg-transparent'>გსურს უპრობლემოდ ჩააბარო გამოცდები?</h1>
                        <h5>მოემზადე ჩვენთან ერთად, სწრაფად, კომოფორტულად და ხარისხიანად.</h5>
                    </div>
                    <Button className='mt-15' onClick={() => { alert('a') }}>
                        <span className='w-full flex gap-x-2 items-center'>დეტალურად <FaChevronDown /></span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MainHero
