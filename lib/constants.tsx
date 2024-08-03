import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Call, Location, Sms } from 'iconsax-react'

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

export const about = {
    title: 'About me',
    description: 'I am a web developer and software engineer with a passion for building web applications and content creation.',
    info: [
        {
            label: 'Name',
            value: 'An Huynh Van Huu'
        },
        {
            label: 'Phone',
            value: '+84 787 782 050'
        },
        {
            label: 'Email',
            value: 'huynhvahuuan3620@gmail.com'
        },
        {
            label: 'Address',
            value: 'Ho Chi Minh City, Vietnam'
        },
        {
            label: 'Languages',
            value: 'Vietnamese, English'
        }
    ]
}

export const experience: Experience = {
    icon: '',
    title: 'My experience',
    description: '',
    items: []
}

export const education: Education = {
    icon: '',
    title: 'Education',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua.',
    items: [
        {
            place: 'Nong Lam University - Ho Chi Minh City',
            major: 'Bachelor of Information Technology',
            duration: '2019 - Now',
            description: 'Current GPA: 3.0/4.0'
        },
        {
            place: 'APTECH Computer Education',
            major: 'Advanced Diploma in Software Engineering',
            duration: '2019 - 2022',
            description: 'Graduated with Distinction'
        }
    ]
}

export const skills = {
    icon: '',
    title: 'Skills',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua.',
    items: [
        {
            title: 'Frontend',
            description: 'React, Next.js, Tailwind CSS, SCSS, HTML, CSS'
        },
        {
            title: 'Backend',
            description: 'Node.js, Express, MongoDB, MySQL, Firebase'
        },
        {
            title: 'Others',
            description: 'Git, Docker, CI/CD, Agile, Scrum'
        }
    ]
}

export const projects: Project[] = [
    {
        id: '01',
        title: 'eNLU - Sinh vien Nong Lam',
        description: 'An app for students of Nong Lam University',
        techStack: ['Flutter'],
        image: '/assets/images/projects/enlu.png',
        href: 'https://play.google.com/store/apps/details?id=it.cwk.enlu'
    },
    {
        id: '02',
        title: 'Portfolio',
        description: 'A portfolio template for developers',
        techStack: ['React', 'Next.js', 'Tailwind CSS'],
        image: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg'
    }
]

export const contactInfo = [
    {
        icon: <Sms variant='Bold' />,
        title: 'Phone',
        content: '(+84) 123 456 789'
    },
    {
        icon: <Call variant='Bold' />,
        title: 'Email',
        content: 'huynhvahuuan3620@gmail.com'
    },
    {
        icon: <Location variant='Bold' />,
        title: 'Address',
        content: 'Ho Chi Minh City, Vietnam'
    }
]
