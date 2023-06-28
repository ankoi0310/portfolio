import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { changeFavicon } from './favicon'
import router from './routing/Router'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const changeMode = (isDarkMode: boolean) => {
    const html = document.querySelector('html')
    if (isDarkMode) {
      html?.classList.remove('dark')
    } else {
      html?.classList.add('dark')
    }
    setDarkMode(isDarkMode)
  }

  useEffect(() => {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
    changeFavicon(colorScheme)

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? 'dark' : 'light'
        changeFavicon(colorScheme)
      })

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', _ => {})
    }
  }, [])

  return (
    <>
      <RouterProvider router={router} />
      {/*<div className={'absolute bottom-5 right-5'}>*/}
      {/*  <button*/}
      {/*    className={*/}
      {/*      'p-4 rounded-full bg-black text-white dark:bg-white dark:text-black'*/}
      {/*    }*/}
      {/*    type={'button'}*/}
      {/*    title={'Toggle dark mode'}*/}
      {/*    onClick={() => changeMode(!darkMode)}>*/}
      {/*    {darkMode ? (*/}
      {/*      <MdDarkMode className={'w-[20px] h-[20px]'} />*/}
      {/*    ) : (*/}
      {/*      <MdLightMode className={'w-[20px] h-[20px]'} />*/}
      {/*    )}*/}
      {/*  </button>*/}
      {/*</div>*/}
    </>
  )
}

export default App
