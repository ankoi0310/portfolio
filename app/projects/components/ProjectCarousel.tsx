import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { projects } from '@/lib/constants'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import ProjectCarouselButton from '@/app/projects/components/ProjectCarouselButton'

const ProjectCarousel = ({
    setProject
}: {
    setProject: (project: Project) => void
}) => {
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) return

        setProject(projects[api.selectedScrollSnap()])

        api.on('select', () => {
            setProject(projects[api.selectedScrollSnap()])
        })
    }, [api])

    return (
        <>
            <Carousel
                setApi={setApi}
                className='xl:h-[520px] mb-12'
            >
                <CarouselContent>
                    {projects.map((project, index) => {
                        return (
                            <CarouselItem key={index} className='w-full'>
                                <div
                                    className={cn(
                                        'relative group h-[240px] sm:h-[350px] md:h-[400px] lg:h-[460px]',
                                        'flex justify-center items-center bg-gray-900'
                                    )}>
                                    <div
                                        className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'
                                    />

                                    <div className='relative w-full h-full'>
                                        <Image
                                            priority
                                            fill
                                            src={project.image}
                                            sizes='100'
                                            className='object-fill'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                {/* slider buttons */}
                <ProjectCarouselButton
                    api={api}
                    buttonStyles={cn(
                        'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]',
                        'flex justify-center items-center transition-all rounded-full'
                    )}
                />
            </Carousel>
        </>
    )
}
export default ProjectCarousel
