import React from 'react'
import { Navigate } from 'react-router-dom'
import DefautLayout from '../layout/Default/DefautLayout'
import FullWidthLayout from '../layout/FullWidth/FullWidthLayout'
import Home from '../pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import Error from '../pages/Error'
import Blog from '../pages/Blog'
import Portfolio from '../pages/Portfolio/Portfolio'

const router = createBrowserRouter([
  {
    element: <DefautLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'services',
        element: <div>Services</div>,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
  {
    element: <FullWidthLayout />,
    children: [
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: '404',
        element: <Error errorCode={404} title={'Page Not Found'} />,
      },
      {
        path: '500',
        element: <Error errorCode={500} title={'Interval Server Error'} />,
      },
      {
        path: '*',
        element: <Error errorCode={404} title={'Page Not Found'} />,
      },
    ],
  },
])

export default router
