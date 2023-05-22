import React from 'react'
import { AiFillSetting } from 'react-icons/ai'

function PostHeader({title}) {
  return (
    <div className='flex justify-between items-center p-2'>
        <h1 className='text-white'>{title}</h1>
        <AiFillSetting className='text-black1.1' />
    </div>
  )
}

export default PostHeader
