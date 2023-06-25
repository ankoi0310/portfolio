import React, {FC} from 'react'
import WhiteLogo from '../../assets/images/white_logo.png'
import {Link} from 'react-router-dom'

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
  <div className={'py-8'}>
    <div className="container mx-auto">
      <div className={'flex justify-between items-center'}>
        <a href="/">
          <img src={WhiteLogo} alt="" height={96} width={96}/>
        </a>
        <div
          className={
            'flex gap-6 lg:gap-16 xl:gap-24 text-white/50 text-xs md:text-base xl:text-xl uppercase tracking-[.15rem]'
          }>
          <Link to={'/'} className={'hover:text-white'}>
            Home
          </Link>
          <Link to={'/about'} className={'hover:text-white'}>
            About
          </Link>
          <Link to={'/services'} className={'hover:text-white'}>
            Services
          </Link>
          <Link to={'/blog'} className={'hover:text-white'}>
            Blog
          </Link>
          <Link to={'/portfolio'} className={'hover:text-white'}>
            Portfolio
          </Link>
        </div>
        <button className={'btn btn-sm'}>Work with me</button>
      </div>
    </div>
  </div>
)

export default Header
