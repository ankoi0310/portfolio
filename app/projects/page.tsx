'use client'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className={'max-w-7xl mx-auto px-8 py-8'}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
                className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl md:text-5xl font-bold dark:text-white text-center'>
                Projects
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
                className='font-extralight text-base md:text-2xl dark:text-neutral-200 text-center py-4'
            >
                Here are some of my recent projects.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.7,
                    duration: 0.8,
                    ease: 'easeInOut'
                }}
            >
                <HoverEffect items={projects} />
            </motion.div>
        </div>
    )
}

const projects = [
    {
        title: 'eNLU - Sinh vien Nong Lam',
        description: 'An app for students of Nong Lam University',
        image: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
        ctaText: 'Play Store',
        ctaLink: 'https://play.google.com/store/apps/details?id=it.cwk.enlu',
        content: () => {
            return (
                <p>
                    Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br /> Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                </p>
            )
        }
    }
]

export default Projects
