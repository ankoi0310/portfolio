import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

interface FullWidthLayoutProps {}

const FullWidthLayout: FC<FullWidthLayoutProps> = () => (
  <div className={'w-screen h-screen'}>
    <Outlet />
  </div>
)

export default FullWidthLayout
