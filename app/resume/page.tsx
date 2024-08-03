'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { about, education, experience, skills } from '@/lib/constants'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn'
                }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-96 mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.length > 0
                                            ? experience.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className={cn(
                                                        'flex flex-col justify-center items-center lg:items-start gap-2',
                                                        'bg-gray-900 h-[240px] py-6 px-10 rounded-xl'
                                                    )}
                                                >
                                                    <span className='text-accent font-semibold'>{item.duration}</span>
                                                    <p className='text-lg text-white/60 min-h-[50px]'>{item.position}</p>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-sm text-white/60'>{item.place}</p>
                                                    </div>
                                                </li>
                                            ))
                                            : <p className='w-fit bg-destructive/80 rounded-md p-2 text-white/60'>
                                                I have no experience yet
                                            </p>
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className={cn(
                                                    'flex flex-col justify-center items-center lg:items-start gap-2',
                                                    'bg-gray-900 h-[240px] py-6 px-10 rounded-xl'
                                                )}
                                            >
                                                <span className='text-accent font-semibold'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px]'>
                                                    {item.place}
                                                </h3>
                                                <p className='text-lg text-white/60 min-h-[50px]'>{item.major}</p>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-sm text-white/60'>{item.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul>
                                    {skills.items.map((item, index) => (
                                        <li key={index}>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value='about' className='w-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[90%] text-primary/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li
                                            key={index}
                                            className='flex items-center justify-center xl:justify-start gap-4'
                                        >
                                            <span className='text-primary/60'>{item.label}</span>
                                            <span className='text-xl'>{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume
