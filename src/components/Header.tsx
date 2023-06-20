import React, { FC, useEffect, useState } from 'react'
import BlackLogo from '../assets/black_logo.png'
import WhiteLogo from '../assets/white_logo.png'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    setMode(colorScheme)

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? 'dark' : 'light'
        setMode(colorScheme)
      })

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', event => {})
    }
  }, [])

  return (
    <div className={'py-8'}>
      <div className="container mx-auto">
        <div className={'flex justify-between items-center'}>
          <a href="/">
            <img
              src={mode === 'dark' ? WhiteLogo : BlackLogo}
              alt=""
              height={96}
              width={96}
            />
          </a>
          <button className={'btn btn-sm'}>Work with me</button>
        </div>
      </div>
    </div>
  )
}

export default Header
