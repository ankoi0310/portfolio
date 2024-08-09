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
    href: 'https://github.com/ankoi0310'
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/ankoi0310/'
  },
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/KOI0310.IT'
  },
  {
    label: 'Youtube',
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/@ankoi0310'
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
  title: 'Working Experience',
  description: '',
  items: []
}

export const education: Education = {
  icon: '',
  title: 'My Education',
  description: '',
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
  description: 'I have experience working with a range of technologies in web development and software engineering.',
  items: [
    {
      title: 'Frontend',
      techList: [
        {
          name: 'Nextjs',
          icon: '/assets/icons/nextjs.svg'
        },
        {
          name: 'Reactjs',
          icon: '/assets/icons/react.svg'
        },
        {
          name: 'Flutter',
          icon: '/assets/icons/flutter.svg'
        },
        {
          name: 'Tailwind CSS',
          icon: '/assets/icons/tailwindcss.svg'
        }
      ]
    },
    {
      title: 'Backend',
      techList: [
        {
          name: 'Java',
          icon: '/assets/icons/java.svg'
        },
        {
          name: 'Nodejs',
          icon: '/assets/icons/nodejs.svg'
        },
        {
          name: 'Express',
          icon: '/assets/icons/express.svg'
        }
      ]
    },
    {
      title: 'Database',
      techList: [
        {
          name: 'MySQL',
          icon: '/assets/icons/mysql.svg'
        },
        {
          name: 'MongoDB',
          icon: '/assets/icons/mongodb.svg'
        },
        {
          name: 'PostgreSQL',
          icon: '/assets/icons/postgresql.svg'
        },
        {
          name: 'Firebase',
          icon: '/assets/icons/firebase.svg'
        }
      ]
    },
    {
      title: 'Others',
      techList: [
        {
          name: 'GitHub',
          icon: '/assets/icons/github.svg'
        },
        {
          name: 'Trello',
          icon: '/assets/icons/trello.svg'
        }
      ]
    }
  ]
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'eNLU - Sinh vien Nong Lam',
    description: 'An app for students of Nong Lam University. It provides a lot of useful features for students' +
      ' such as checking grades, schedules, and more.',
    techStack: ['Flutter'],
    image: '/assets/images/projects/enlu.png',
    href: 'https://play.google.com/store/apps/details?id=it.cwk.enlu'
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
