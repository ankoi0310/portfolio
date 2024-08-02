'use client'

import Social from '@/app/components/Social'
import Photo from '@/app/components/Photo'
import { DownloadCVButton } from '@/components/shared'
import Stats from '@/app/components/Stats'

export default function Home() {
    return (
        <section className='container mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
                {/* introduction */}
                <div className='text-center xl:text-left order-2 xl:order-none'>
                    <span className='text-xl'>Software Developer</span>
                    <h1 className='h1 mb-6'>
                        Hello, I'm <br /> <span className='text-accent'>An Huynh Van Huu</span>
                    </h1>
                    <p className='max-w-[500px] mb-9 text-white/80'>
                        I'm a software developer based in Vietnam. I specialize in building
                        high-quality websites and applications. I'm passionate about coding and
                        creating content.
                    </p>

                    <div className='flex flex-col xl:flex-row items-center gap-8'>
                        <DownloadCVButton className='uppercase' />
                        <div className='mb-8 xl:mb-0'>
                            <Social
                                containerStyles='flex gap-6'
                                iconStyles='w-10 h-10 border border-accent rounded-full flex justify-center
                                    items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                            />
                        </div>
                    </div>
                </div>

                {/* photo */}
                <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                    <Photo />
                </div>
            </div>
            <Stats />
        </section>
    )
}
