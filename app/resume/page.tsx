'use client'

import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { FlipWords } from '@/components/ui/flip-words'

const About = () => {
    const words = ['Web Developer', 'Software Engineer', 'Content Creator']

    return (
        <div
            className='h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
            <Spotlight
                className='-top-32 left-16 sm:-top-40 sm:left-32 lg:left-1/4 lg:-top-40'
                fill='white'
            />
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <div className='text-4xl md:text-6xl font-bold text-white dark:text-black text-center'>
                    Hi, I'm <span className='text-accent'>John Doe</span>.
                </div>
                <div className='text-lg md:text-2xl font-light text-white dark:text-black text-center py-4'>
                    I'm a <FlipWords words={words} />
                </div>
            </div>
        </div>
    )
}

export default About
