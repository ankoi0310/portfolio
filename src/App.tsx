import React, { useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import { changeFavicon } from './favicon'

function App() {
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
        .removeEventListener('change', event => {})
    }
  }, [])

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

export default App
