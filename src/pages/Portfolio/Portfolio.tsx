import React, { FC, useEffect, useState } from 'react'
import './Portfolio.css'
import avatar from '../../assets/images/avatar.jpg'
import {
  BiHome,
  BiUser,
  BiBook,
  BiReceipt,
  BiBriefcaseAlt,
  BiAward,
  BiLinkExternal,
  BiGridAlt,
  BiMap,
  BiEnvelope,
  BiPhone,
  BiHeadphone,
  BiCycling,
  BiCodeAlt,
  BiUpArrowAlt,
  BiMoon,
  BiDownload,
  BiSun,
} from 'react-icons/bi'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import {
  showMenu,
  linkAction,
  scrollActive,
  scrollTop,
  scaleCV,
  removeScaleCV,
  generateResume,
} from '../../utils/portfolio'

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const resumeProgress = () => {
    // 1. Add scale-cv class to body
    scaleCV()

    // 2. Generate PDF
    generateResume()

    // 3. Remove scale-cv class from body after 500ms
    setTimeout(removeScaleCV, 500)
  }

  const themeHandler = () => {
    console.log('theme-button clicked')
    document.body.classList.toggle('dark-theme')
    setDarkTheme(document.body.classList.contains('dark-theme'))
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light')
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTop)
    window.addEventListener('scroll', scrollActive)

    const navLink = document.querySelectorAll<HTMLElement>('.nav__link')
    navLink.forEach(n => n.addEventListener('click', linkAction))

    setDarkTheme(document.body.classList.contains('dark-theme'))
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light')

    const themeButton = document.getElementById('theme-button')
    themeButton?.addEventListener('click', themeHandler)

    const resumeButton = document.getElementById('resume-button')
    resumeButton?.addEventListener('click', resumeProgress)

    return () => {
      showMenu()
      window.removeEventListener('scroll', scrollTop)
      window.removeEventListener('scroll', scrollActive)
      themeButton?.removeEventListener('click', themeHandler)
      navLink.forEach(n => n.removeEventListener('click', linkAction))
      resumeButton?.removeEventListener('click', resumeProgress)
    }
  }, [darkTheme, themeHandler])

  return (
    <>
      <header className={'l-header'} id="header">
        <nav className="nav bd-container">
          <HashLink to={'#home'} className="nav__logo">
            KOI
          </HashLink>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <HashLink to={'#home'} className="nav__link active-link">
                  <BiHome className={'nav__icon'} /> Home
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#profile'} className="nav__link">
                  <BiUser className={'nav__icon'} /> Profile
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#education'} className="nav__link">
                  <BiBook className={'nav__icon'} /> Education
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#skills'} className="nav__link">
                  <BiReceipt className={'nav__icon'} /> Skills
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#experience'} className="nav__link">
                  <BiBriefcaseAlt className={'nav__icon'} /> Experience
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#certificates'} className="nav__link">
                  <BiAward className={'nav__icon'} /> Certificates
                </HashLink>
              </li>
              <li className="nav__item">
                <HashLink to={'#references'} className="nav__link">
                  <BiLinkExternal className={'nav__icon'} /> References
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <BiGridAlt />
          </div>
        </nav>
      </header>

      <main className={'l-main bd-container'}>
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* HOME */}
            <section className="home" id="home">
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img src={avatar} alt="avatar" className={'home__img'} />

                  <h1 className="home__title">
                    <b>AN HUYNH VAN HUU</b>
                  </h1>
                  <h3 className="home__profession">Web Developer</h3>

                  {/* Download CV button */}
                  <div>
                    <a
                      download
                      href="/assets/pdf/resume.pdf"
                      className="home__button-movil">
                      Download
                    </a>
                  </div>
                </div>

                <div className="home__address bd-grid">
                  <span className="home__information">
                    <BiMap className="home__icon" /> Ho Chi Minh City, Vietnam
                  </span>
                  <span className="home__information">
                    <BiEnvelope className="home__icon" />{' '}
                    huynhvahuuan3620@gmail.com
                  </span>
                  <span className="home__information">
                    <BiPhone className="home__icon" /> +84787782050
                  </span>
                </div>
              </div>

              {/* Theme change button */}
              {darkTheme ? (
                <BiMoon
                  className="change-theme"
                  title="Theme"
                  id="theme-button"
                />
              ) : (
                <BiSun
                  className="change-theme"
                  title="Theme"
                  id="theme-button"
                />
              )}

              {/* Button to generate and download the pdf file. */}
              <BiDownload
                className="generate-pdf"
                title="Generate PDF"
                id="resume-button"
              />
            </section>

            {/* SOCIAL */}
            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>
              <div className="social__container bd-grid">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsLinkedin className="social__icon" /> @ankoi0310
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsFacebook className="social__icon" /> @KOI0310.IT
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social__link">
                  <BsInstagram className="social__icon" /> @ankoi.0310
                </a>
              </div>
            </section>

            {/* PROFILE */}
            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>

              <p className="profile__description">
                I am a 4th-year IT student at Nong Lam University. I have a
                passion for web development and I am looking for a job as a web
                developer.
              </p>
            </section>

            {/* EDUCATION */}
            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>

              <div className="education__container bd-grid">
                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      Bachelor of Information Technology
                    </h3>
                    <span className="education__studies">
                      Nong Lam University
                    </span>
                    <span className="education__year">2018 - 2022</span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    <span className="education__line"></span>
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      Bachelor of Information Technology
                    </h3>
                    <span className="education__studies">
                      Nong Lam University
                    </span>
                    <span className="education__year">2018 - 2022</span>
                  </div>
                </div>

                <div className="education__content">
                  <div className="education__time">
                    <span className="education__rounder"></span>
                    {/*<span className="education__line"></span>*/}
                  </div>

                  <div className="education__data bd-grid">
                    <h3 className="education__title">
                      Bachelor of Information Technology
                    </h3>
                    <span className="education__studies">
                      Nong Lam University
                    </span>
                    <span className="education__year">2018 - 2022</span>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS */}
            <section className="skills section" id="skills">
              <h2 className="section-title">Skills</h2>

              <div className="skills__content bd-grid">
                <ul className="skills__data">
                  <li className="skill__name">
                    <span className="skill__circle"></span> Angular
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> React
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> Flutter
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> Firebase
                  </li>
                </ul>
                <ul className="skills__data">
                  <li className="skill__name">
                    <span className="skill__circle"></span> MSSQL
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> MongoDB
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> MySQL
                  </li>
                  <li className="skill__name">
                    <span className="skill__circle"></span> Spring Boot
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <div className="resume__right">
            {/* EXPERIENCE */}
            <section className="experience section" id="experience">
              <h2 className="section-title">Experience</h2>

              <div className="experience__container bd-grid">
                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Web Developer</h3>
                    <span className="experience__company">
                      2019 - 2020 | ABC
                    </span>
                    <p className="experience__description">
                      Worked as a web developer for 1 year. I have experience in
                      developing websites using Angular, React, and Firebase.
                    </p>
                  </div>
                </div>

                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">Web Developer</h3>
                    <span className="experience__company">
                      2019 - 2020 | ABC
                    </span>
                    <p className="experience__description">
                      Worked as a web developer for 1 year. I have experience in
                      developing websites using Angular, React, and Firebase.
                    </p>
                  </div>
                </div>

                <div className="experience__content">
                  <div className="experience__time">
                    <span className="experience__rounder"></span>
                    {/*<span className="experience__line"></span>*/}
                  </div>

                  <div className="experience__data bd-grid">
                    <h3 className="experience__title">
                      Mobile Application Developer
                    </h3>
                    <span className="experience__company">
                      2019 - 2020 | ABC
                    </span>
                    <p className="experience__description">
                      Worked as a web developer for 1 year. I have experience in
                      developing websites using Angular, React, and Firebase.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* CERTIFICATES */}
            <section className="certificates section" id="certificates">
              <h2 className="section-title">Certificates</h2>

              <div className="certificates__container bd-grid">
                <div className="certificate__content">
                  <h3 className="certificate__title">
                    Certified Web Developer
                  </h3>
                  <p className="certificate__description">
                    The course focused on the fundamentals of web development
                  </p>
                </div>

                <div className="certificate__content">
                  <h3 className="certificate__title">
                    Certified Web Developer
                  </h3>
                  <p className="certificate__description">
                    The course focused on the fundamentals of web development
                  </p>
                </div>

                <div className="certificate__content">
                  <h3 className="certificate__title">
                    Certified Web Developer
                  </h3>
                  <p className="certificate__description">
                    The course focused on the fundamentals of web development
                  </p>
                </div>
              </div>
            </section>

            {/* REFERENCES */}
            <section className="references section" id="references">
              <h2 className="section-title">References</h2>

              <div className="references__container bd-grid">
                <div className="reference__content bd-grid">
                  <span className="reference__subtitle">ABC</span>
                  <h3 className="reference__title">XYZ</h3>
                  <ul className="reference__contact">
                    <li>Phone: 0123456789</li>
                    <li>Email: abc@gmail.com</li>
                  </ul>
                </div>

                <div className="reference__content bd-grid">
                  <span className="reference__subtitle">ABC</span>
                  <h3 className="reference__title">XYZ</h3>
                  <ul className="reference__contact">
                    <li>Phone: 0123456789</li>
                    <li>Email: abc@gmail.com</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LANGUAGES */}
            <section className="languagues section">
              <h2 className="section-title">Languages</h2>

              <div className="languages__container">
                <ul className="languages__content bd-grid">
                  <li className="language__name">
                    <span className="language__circle"></span> Vietnamese
                  </li>
                  <li className="language__name">
                    <span className="language__circle"></span> English
                  </li>
                </ul>
              </div>
            </section>

            {/* INTERESTS */}
            <section className="interests section">
              <h2 className="section-title">Interests</h2>

              <div className="interests__container bd-grid">
                <div className="interest__content">
                  <BiHeadphone className="interest__icon" />
                  <span className="interest__name">Music</span>
                </div>
                <div className="interest__content">
                  <BiCycling className="interest__icon" />
                  <span className="interest__name">Travel</span>
                </div>
                <div className="interest__content">
                  <BiBook className="interest__icon" />
                  <span className="interest__name">Read</span>
                </div>
                <div className="interest__content">
                  <BiCodeAlt className="interest__icon" />
                  <span className="interest__name">Code</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* SCROLL TOP */}
      <HashLink to={'#'} className="scroll-top" id="scroll-top">
        <BiUpArrowAlt className="scroll-top__icon" />
      </HashLink>
    </>
  )
}

export default Portfolio
