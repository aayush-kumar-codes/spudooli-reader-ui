import React from 'react'
import { RiCommandLine, RiShareCircleFill } from 'react-icons/ri'
import { FaRegCircle } from 'react-icons/fa'
import { MdOutlineUpload, MdOutlineHexagon } from 'react-icons/md'
import { GiRotaryPhone } from 'react-icons/gi'

function PostFooter() {
  return (
    <div className='flex'>
      <RiCommandLine className='text-black1.1'/>
      <RiShareCircleFill className='text-black1.1 ml-2' />
      <FaRegCircle className='text-black1.1 ml-2' />
      <MdOutlineUpload className='text-black1.1 ml-2' />
      <MdOutlineHexagon className='text-black1.1 ml-2' />
      <GiRotaryPhone className='text-black1.1 ml-2' />
    </div>
  )
}

export default PostFooter
