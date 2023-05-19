import React , {useState , useEffect, useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../component/Navbar'
import { AuthContext } from '../../routes'
import { ACCESS_TOKEN_KEY } from '../../services/constant'

function OnBoardingLayout(props) {
 const auth = useContext(AuthContext)
  return (
    <div className='m-auto'>
      <div className='w-10/12 m-auto'>
      <Navbar isLogin={auth.isLogin} setIsLogin = {auth.setIsLogin} />
      </div>
      <Outlet />
    </div>
  )
}

export default OnBoardingLayout
