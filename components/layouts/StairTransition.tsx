'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { stairSteps } from '@/lib/constants'

const StairTransition = () => {
    const pathname = usePathname()

    return (
        <AnimatePresence mode='wait'>
            <div key={pathname}>
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
                    <Stairs />
                </div>

                <motion.div
                    className='h-screen w-screen fixed bg-background top-0 pointer-events-none'
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }
                    }}
                />
            </div>
        </AnimatePresence>
    )
}
export default StairTransition

const variants = {
    initial: { top: '0%' },
    animate: { top: '100%' },
    exit: {
        top: ['100%', '0%']
    }
}

const reverseIndex = (index: number) => {
    return stairSteps - index - 1
}

const Stairs = () => {
    return (
        <>
            {[...Array(stairSteps)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1
                    }}
                    className='h-full w-full bg-white relative'
                />
            ))}
        </>
    )
}
