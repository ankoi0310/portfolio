declare module 'tailwindcss/lib/util/flattenColorPalette'

declare type NavItem = {
    label: string
    href: string
}

declare type Social = {
    label: string
    icon: any
    href: string
}

declare type Experience = {
    icon: string
    title: string
    description: string
    items: {
        duration: string
        place: string
        position: string
        description: string
    }[]
}

declare type Education = {
    icon: string
    title: string
    description: string
    items: {
        duration: string
        place: string
        major: string
        description: string
    }[]
}

declare type Project = {
    id: string
    title: string
    description: string
    techStack: string[]
    image: string
    href?: string
    repo?: string
}
