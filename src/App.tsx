import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { changeFavicon } from './favicon'
import router from './routing/Router'

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
        .removeEventListener('change', _ => {})
    }
  }, [])

  return <RouterProvider router={router} />
}

export default App
