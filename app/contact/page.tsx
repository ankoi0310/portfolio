'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '@/app/contact/components/ContactForm'
import ContactInfo from '@/app/contact/components/ContactInfo'

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <ContactForm />

                    {/* info */}
                    <ContactInfo />
                </div>
            </div>
        </motion.section>
    )
}
export default Contact
