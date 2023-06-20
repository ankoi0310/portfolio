import React, { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

interface ServicesProps {}

const services = [
  {
    name: 'Web Development',
    description: 'I build websites using React, Next.js, and Tailwind CSS.',
    link: 'Learn More',
  },
  {
    name: 'Web Design',
    description: 'I design websites using Figma and Adobe XD.',
    link: 'Learn More',
  },
  {
    name: 'Mobile Development',
    description: 'I build mobile apps using Flutter.',
    link: 'Learn More',
  },
]

const Services: FC<ServicesProps> = () => (
  <section className={'section'} id={'services'}>
    <div className="container mx-auto">
      <div className={'flex flex-col lg:flex-row'}>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={
            'flex-1 lg:bg-services lg:bg-bottom bg-no-repeat' +
            ' mix-blend-lighten mb-12 lg:mb-0'
          }>
          <h2 className={'h2 text-accent mb-6'}>What I Do.</h2>
          <h3 className={'h3 max-w-[455px] mb-16'}>
            I'm a Freelance Front-end Developer with over 2 years of experience.
          </h3>
          <button className={'btn btn-sm'}>See my work</button>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={'flex-1'}>
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service

              return (
                <div
                  className={
                    'border-b border-white/20 h-[146px] mb-[25px] flex'
                  }
                  key={index}>
                  <div className={'max-w-[476px]'}>
                    <h4
                      className={
                        'text-[20px] tracking-wider font-primary' +
                        ' font-semibold mb-5'
                      }>
                      {name}
                    </h4>
                    <p className={'font-secondary leading-tight'}>
                      {description}
                    </p>
                  </div>
                  <div className={'flex flex-col flex-1 items-end'}>
                    <a
                      href="!#"
                      className={
                        'btn w-9 h-9 mb-[42px] flex' +
                        ' justify-center items-center'
                      }>
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className={'text-gradient text-sm'}>
                      Learn more
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Services
