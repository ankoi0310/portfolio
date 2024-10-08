'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

type CardItem = {
    iconPath: string
    name: string
}

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    duplicate = true,
    pauseOnHover = true,
    className
}: {
    items: CardItem[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow' | 'none';
    duplicate?: boolean;
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            if (duplicate)
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true)
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem)
                    }
                })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards'
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse'
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s')
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s')
            } else if (speed === 'slow') {
                containerRef.current.style.setProperty('--animation-duration', '80s')
            } else {
                containerRef.current.style.setProperty('--animation-duration', '0s')
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className='flex flex-col items-center w-40'
                    >
                        <img
                            src={item.iconPath}
                            alt={item.name}
                            className='w-12 h-12'
                        />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
