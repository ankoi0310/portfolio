import React, { FC } from 'react'
import { Link } from 'react-scroll'
import { BiHomeAlt, BiNews, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => (
  <nav className={'fixed top-2/4 left-4 -translate-y-2/4 z-20'}>
    <div
      className={
        'flex flex-col gap-4 p-2.5 bg-black/20 shadow-lg backdrop-blur-2xl rounded-full'
      }>
      <Link
        to={'home'}
        activeClass="active"
        smooth={true}
        spy={true}
        offset={-200}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BiHomeAlt />
      </Link>
      <Link
        to={'about'}
        activeClass="active"
        smooth={true}
        spy={true}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BiUser />
      </Link>
      <Link
        to={'services'}
        activeClass="active"
        smooth={true}
        spy={true}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BsClipboardData />
      </Link>
      <Link
        to={'sharing'}
        activeClass="active"
        smooth={true}
        spy={true}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BiNews />
      </Link>
      <Link
        to={'work'}
        activeClass="active"
        smooth={true}
        spy={true}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BsBriefcase />
      </Link>
      <Link
        to={'contact'}
        activeClass="active"
        smooth={true}
        spy={true}
        className={
          'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
        }>
        <BsChatSquareText />
      </Link>
    </div>
  </nav>
)

export default SideBar
