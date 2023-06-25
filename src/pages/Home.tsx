import React, { FC } from 'react'
import About from '../components/home/About'
import Banner from '../components/home/Banner'
import Contact from '../components/home/Contact'
import Services from '../components/home/Services'
import Work from '../components/home/Work'
import SideBar from '../components/shared/SideBar'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <>
    <Banner />
    <SideBar />
    <About />
    <Services />
    <Work />
    <Contact />
  </>
)

export default Home
