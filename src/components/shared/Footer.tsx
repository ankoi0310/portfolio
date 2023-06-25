import React, { FC } from 'react'
import BlackLogo from '../../assets/images/black_logo.png'
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={'bg-white text-black rounded-t-2xl pb-5 pt-10'}>
    <div className={'flex justify-around mb-2'}>
      {/* About */}
      <div className={'w-1/5'}>
        <img src={BlackLogo} alt="logo" className={'w-[100px] mx-auto mb-5'} />
        <p className={'w-[89%] mx-auto'}>
          This is a personal blog. I share my knowledge about web development
          and programming here.
        </p>
      </div>
      {/* Contact */}
      <div>
        <h4 className={'h4'}>Contact</h4>
        <div className={'flex flex-col gap-y-4'}>
          <p className={'leading-7'}>
            Nong Lam University - Ho Chi Minh City,
            <br />
            Linh Trung Ward, Thu Duc City, Ho Chi Minh City, Viet Nam
          </p>
          <p>
            <a href="mailto:huynhvahuuan3620@gmail.com" className={'underline'}>
              huynhvahuuan3620@gmail.com
            </a>
          </p>
          <p>
            <b>0123456789</b>
          </p>
        </div>
      </div>
      {/* Link */}
      <div>
        <h4 className={'h4'}>Link</h4>
        <div className={'flex flex-col'}>
          <Link to={'/'} className={'hover:text-black'}>
            Home
          </Link>
          <Link to={'/about'} className={'hover:text-black'}>
            About
          </Link>
          <Link to={'/services'} className={'hover:text-black'}>
            Services
          </Link>
          <Link to={'/blog'} className={'hover:text-black'}>
            Blog
          </Link>
          <Link to={'/portfolio'} className={'hover:text-black'}>
            Portfolio
          </Link>
        </div>
      </div>
      {/* Social Media */}
      <div className={'flex flex-col'}>
        <h4 className={'h4'}>Follow Me</h4>
        <div className={'flex flex-row items-center gap-x-4 text-[1.25rem]'}>
          <BsFacebook className={'mr-2'} />
          <BsLinkedin className={'mr-2'} />
          <BsGithub className={'mr-2'} />
          <BsInstagram className={'mr-2'} />
          <BsYoutube className={'mr-2'} />
          <BsTwitter className={'mr-2'} />
        </div>
      </div>
    </div>
    <hr className={'w-[90%] mx-auto border-0 border-b-2 border-[#ccc]'} />
    <p className={'flex justify-center mt-5 font-bold'}>
      Code With Koi © 2021 - All Rights Reserved
    </p>
  </footer>
)

export default Footer
