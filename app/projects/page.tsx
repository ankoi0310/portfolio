'use client'

import { useState } from 'react'
import { projects } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import ProjectInfo from '@/app/projects/components/ProjectInfo'
import ProjectCarousel from '@/app/projects/components/ProjectCarousel'

const Projects = () => {
    const [project, setProject] = useState(projects[0])

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
            className={'min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className={cn(
                        'w-full xl:w-[50%] xl:h-[460px]',
                        'flex flex-col xl:justify-between order-2 xl:order-none'
                    )}>
                        <ProjectInfo project={project} />
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <ProjectCarousel setProject={setProject} />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects
