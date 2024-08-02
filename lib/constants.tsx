import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export const stairSteps = 6

export const navItems: NavItem[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Resume',
        href: '/resume'
    },
    {
        label: 'Projects',
        href: '/projects'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
]

export const socials = [
    {
        label: 'Github',
        icon: <FaGithub />,
        href: 'https'
    },
    {
        label: 'LinkedIn',
        icon: <FaLinkedin />,
        href: ''
    },
    {
        label: 'Facebook',
        icon: <FaFacebook />,
        href: ''
    },
    {
        label: 'Youtube',
        icon: <FaYoutube />,
        href: ''
    }
]
