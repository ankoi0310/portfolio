'use client'

import React from 'react'

const Contact = () => {
    return (
        <div className='relative max-w-4xl mx-auto pb-40'>
            <h2 className='text-white text-2xl md:text-6xl font-bold text-center'>
                Feel free to reach out
            </h2>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
                <button
                    className='px-4 py-2 bg-violet-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]'>
                    Hire me
                </button>
                <button className='px-4 py-2  text-white '>
                    Download CV
                </button>
            </div>
        </div>
    )
}
export default Contact
