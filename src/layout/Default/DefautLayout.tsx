import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/Header'

interface DefautLayoutProps {}

const DefautLayout: FC<DefautLayoutProps> = () => (
  <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

export default DefautLayout
