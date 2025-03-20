import React from 'react'

const Subheading = ({ title, description }) => {
  return (
    <div className='w-full flex flex-col gap-y-3 sm:flex-row items-center sm:justify-start gap-x-3 my-15 px-3 md:px-6'>
      <h1 className='text-4xl bg-main-color text-dark-color p-3 rounded-sm'>{title}</h1>
      <span className='text-sm text-center sm:text-left text-wrap md:w-[30%]'>{description}</span>
    </div>
  )
}

export default Subheading