import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../component/Sidebar'

function ReadLayout() {
  return (
    <div className='flex overflow-hidden'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default ReadLayout
