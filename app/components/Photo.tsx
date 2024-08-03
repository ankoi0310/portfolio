'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Photo = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 1.5,
                    duration: 0.4,
                    easing: 'easeIn'
                }
            }}
            className='w-full h-full relative'
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        easing: 'easeInOut'
                    }
                }}
                className='w-[280px] h-[280px] md:w-[380px] md:h-[380px] xl:w-[430px] xl:h-[430px] 2xl:w-[480px] 2xl:h-[480px]
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-lighten'
            >
                <Image
                    src='/assets/images/home/avatar.png'
                    priority
                    quality='100'
                    fill
                    alt=''
                    className='drop-shadow-accent object-contain rounded-full p-2'
                />
            </motion.div>

            {/* circle */}
            <motion.svg
                className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px]'
                fill='transparent'
                viewBox='0 0 500 500'
                xmlns='http://www.w3.org/2000/svg'
            >
                <motion.circle
                    cx='250'
                    cy='250'
                    r='246'
                    stroke='hsl(var(--accent))'
                    strokeWidth='4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    initial={{ strokeDasharray: '24 10 0 0' }}
                    animate={{
                        strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                        rotate: [120, 360]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 20
                    }}
                />
            </motion.svg>
        </motion.div>
    )
}
export default Photo
