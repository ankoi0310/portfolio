import { CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const ProjectCarouselButton = ({
    api,
    containerStyles,
    buttonStyles
}: {
    api: CarouselApi
    containerStyles?: string
    buttonStyles?: string
}) => {
    return (
        <div className={cn(
            'w-full flex justify-between xl:justify-end gap-0 md:gap-2 xl:gap-4',
            'absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20',
            containerStyles
        )}>
            <button
                className={cn(
                    buttonStyles,
                    api?.canScrollPrev() ? 'opacity-100' : 'opacity-50 pointer-events-none'
                )}
                onClick={() => api?.scrollPrev()}
            >
                <ArrowLeft2 />
            </button>
            <button
                className={cn(
                    buttonStyles,
                    api?.canScrollNext() ? 'opacity-100' : 'opacity-50 pointer-events-none'
                )}
                onClick={() => api?.scrollNext()}
            >
                <ArrowRight2 />
            </button>
        </div>
    )
}
export default ProjectCarouselButton
