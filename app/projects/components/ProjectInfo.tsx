import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { BsGithub, BsLink45Deg } from 'react-icons/bs'

const ProjectInfo = ({
    project
}: {
    project: Project
}) => {
    return (
        <div className='flex flex-col gap-[30px] h-[50%]'>
            <div className='text-4xl md:text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.id}
            </div>

            <h2
                className={cn(
                    'text-xl md:text-3xl xl:text-5xl font-bold leading-none',
                    'group-hover:text-accent transition-all duration-500'
                )}
            >{project.title}</h2>

            <p className='text-sm md:text-base text-primary/60'>{project.description}</p>

            <div className='flex gap-4'>
                {project.techStack.map((tech, index) => (
                    <Badge
                        key={index} variant='accent'
                        className='text-xs sm:text-sm'
                    >{tech}</Badge>
                ))}
            </div>
            <div className='border border-white/20'></div>

            {/* button */}
            <div className='flex items-center gap-4'>
                {/* live preview */}
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger
                            className={cn(
                                'p-2 xl:p-4 rounded-full bg-primary/5',
                                'flex items-center justify-center group'
                            )}
                        >
                            {
                                project.href
                                    ? (<Link href={project.href} target='_blank'>
                                        <BsLink45Deg className='text-2xl group-hover:text-accent' />
                                    </Link>)
                                    : (
                                        <BsLink45Deg className='text-2xl text-primary/60' />
                                    )
                            }
                        </TooltipTrigger>
                        <TooltipContent>
                            {project.href
                                ? (<p>Live Preview</p>)
                                : (<p>This project does not have a live preview</p>)
                            }
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                {/* github link */}
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger
                            className={cn(
                                'p-2 xl:p-4 rounded-full bg-primary/5',
                                'flex items-center justify-center group'
                            )}
                        >
                            {
                                project.repo
                                    ? (<Link href={project.repo} target='_blank'>
                                        <BsGithub className='text-2xl group-hover:text-accent' />
                                    </Link>)
                                    : (
                                        <BsGithub className='text-2xl text-primary/60' />
                                    )
                            }
                        </TooltipTrigger>
                        <TooltipContent>
                            {project.repo
                                ? (<p>Github Repository</p>)
                                : (<p>This project does not have a github repository</p>)
                            }
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}
export default ProjectInfo
