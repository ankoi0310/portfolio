import React from 'react'
import { contactInfo } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ContactInfo = () => {
    return (
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-4 xl:mb-0'>
            <ul className='flex flex-col gap-6 md:gap-8 xl:gap-10'>
                {contactInfo.map((item, index) => (
                    <li key={index} className='flex items-center gap-6'>
                        <div className={cn(
                            'p-4 md:p-5 xl:p-6 bg-gray-900 text-accent rounded-md',
                            'flex items-center justify-center'
                        )}>
                            <span className='text-2xl'>{item.icon}</span>
                        </div>
                        <div className='flex-1'>
                            <p className='text-sm md:text-balance text-white/60'>{item.title}</p>
                            <h3 className='text-base md:text-xl'>{item.content}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ContactInfo
