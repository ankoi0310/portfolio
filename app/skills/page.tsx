'use client'

import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { LampContainer } from '@/components/ui/lamp'

const Skills = () => {
    const secondSkills = backEndSkills.concat(databaseSkills).concat(otherSkills)

    return (
        <LampContainer>
            <InfiniteMovingCards
                items={frontEndSkills}
                speed='normal'
            />
            <InfiniteMovingCards
                items={secondSkills}
                direction='right'
                speed='normal'
            />
        </LampContainer>
    )
}

export default Skills

const frontEndSkills = [
    {
        iconPath: '/assets/icons/flutter.svg',
        name: 'Flutter'
    },
    {
        iconPath: '/assets/icons/react.svg',
        name: 'React'
    },
    {
        iconPath: '/assets/icons/nextjs.svg',
        name: 'Next.js'
    },
    {
        iconPath: '/assets/icons/tailwindcss.svg',
        name: 'Tailwind CSS'
    },
    {
        iconPath: '/assets/icons/typescript.svg',
        name: 'TypeScript'
    },
    {
        iconPath: 'assets/icons/javascript.svg',
        name: 'JavaScript'
    }
]

const backEndSkills = [
    {
        iconPath: '/assets/icons/java.svg',
        name: 'Java'
    },
    {
        iconPath: '/assets/icons/nodejs.svg',
        name: 'Node.js'
    },
    {
        iconPath: '/assets/icons/express.svg',
        name: 'Express.js'
    }
]

const databaseSkills = [
    {
        iconPath: '/assets/icons/mongodb.svg',
        name: 'MongoDB'
    },
    {
        iconPath: '/assets/icons/mysql.svg',
        name: 'MySQL'
    },
    {
        iconPath: '/assets/icons/postgresql.svg',
        name: 'PostgreSQL'
    }
]

const otherSkills = [
    {
        iconPath: '/assets/icons/github.svg',
        name: 'GitHub'
    },
    {
        iconPath: '/assets/icons/trello.svg',
        name: 'Trello'
    }
]
