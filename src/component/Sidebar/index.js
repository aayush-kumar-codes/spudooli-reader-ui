
import React , { useState } from 'react' 
import { RiCommandLine, RiShareCircleFill } from 'react-icons/ri'
import { FaRegCircle } from 'react-icons/fa'
import { MdOutlineUpload, MdOutlineHexagon, MdInstallDesktop } from 'react-icons/md'
import { GiRotaryPhone } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function SideBar() {
  return (  
    <div className='bg-sidebar w-16 flex flex-col   align-start h-screen py-5'>
        
         <Link className='self-center'><FaRegCircle size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><FaRegCircle size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><RiCommandLine size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><RiShareCircleFill size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><MdOutlineUpload size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><MdOutlineHexagon size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
         <Link className='self-center'><GiRotaryPhone size="3rem" className='text-black1.1 mb-4 hover:text-white' /></Link>
        
    </div>
  )
}

export default SideBar