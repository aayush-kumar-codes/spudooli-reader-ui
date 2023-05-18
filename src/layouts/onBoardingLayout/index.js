import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar'

function OnBoardingLayout() {
  return (
    <div className='w-10/12 m-auto'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default OnBoardingLayout
