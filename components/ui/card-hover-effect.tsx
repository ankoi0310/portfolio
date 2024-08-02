import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useId, useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks/use-outside-click'
import Image from 'next/image'

type CardItem = {
    title: string
    description: string
    image: string
    ctaText: string
    ctaLink: string
    content: () => React.ReactElement
}

export const HoverEffect = ({
    items,
    className
}: {
    items: CardItem[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [active, setActive] = useState<(typeof items)[number] | boolean | null>(
        null
    )
    const ref = useRef<HTMLDivElement>(null)
    const id = useId()

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    return (
        <div
            className={cn(
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10',
                className
            )}
        >
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className='fixed inset-0 bg-black/20 h-full w-full z-10'
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <div className='fixed inset-0 grid place-items-center z-[100]'>
                        <motion.div
                            layoutId={`item-${active.title}-${id}`}
                            ref={ref}
                            className='w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-black sm:rounded-3xl overflow-hidden'
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.image}
                                    alt={active.title}
                                    className='w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                                />
                            </motion.div>

                            <div>
                                <div className='flex justify-between items-start p-4'>
                                    <div className=''>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className='font-bold text-neutral-700 dark:text-neutral-200'
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className='text-neutral-600 dark:text-neutral-400'
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target='_blank'
                                        className='px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white'
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className='pt-4 relative px-4'>
                                    <motion.div
                                        layout
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        className='text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]'
                                    >
                                        {typeof active.content === 'function'
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            {items.map((item, idx) => (
                <motion.div
                    key={item?.image}
                    className='relative group block p-2 h-full w-full'
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl'
                                layoutId='hoverBackground'
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: 1,
                                    transition: {duration: 0.15}
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.15, delay: 0.2}
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <motion.div
                        layoutId={`item-${item.title}-${id}`}
                        key={`item-${item.title}-${id}`}
                        className='rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20'>
                        <motion.div layoutId={`image-${item.title}-${id}`} className={'relative'}>
                            <Image
                                width={100}
                                height={100}
                                src={item.image}
                                alt={item.title}
                                className='h-full w-full rounded-lg object-cover'
                            />
                            {/* A button detail at the right bottom of the image */}
                            <motion.div
                                layoutId={`button-${item.title}-${id}`}
                                className='absolute inset-0 flex items-end justify-end p-4'
                            >
                                <motion.button
                                    onClick={() => setActive(item)}
                                    className='bg-white dark:bg-black dark:text-white text-black px-4 py-2 rounded-full'
                                >
                                    Details
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <div className='pt-4'>
                            <motion.h3
                                layoutId={`title-${item.title}-${id}`}
                                className='font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left'
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${item.description}-${id}`}
                                className='text-neutral-600 dark:text-neutral-400 text-center md:text-left'
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}
