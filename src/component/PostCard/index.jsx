import React from 'react'
import { RiCommandLine, RiShareCircleFill } from 'react-icons/ri'
import { FaRegCircle } from 'react-icons/fa'
import { MdOutlineUpload, MdOutlineHexagon } from 'react-icons/md'
import { GiRotaryPhone } from 'react-icons/gi'
import PostFooter from './PostFooter'
import moment from 'moment'

function PostCard({feed}) {
const inputDate = moment(feed?.date_published, 'ddd, DD MMM YYYY HH:mm:ss Z');
const outputDate = inputDate.format('MMMM D [at] h:mm A');
  return (
      <div className="flex bg-black0.9 p-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className='w-full ml-4'>
          <div className="flex justify-between">
            <p className="text-sm w-36 font-semibold text-gray-900">
              <a href={feed?.url} className="hover:underline text-sky-700">
                {feed?.title}
              </a>
            </p>
            <p className="text-sm text-gray-500 text-white">
                {outputDate}
            </p>
          </div>
          <div>
            <p className='text-white break-all'>
              {feed?.content}
            </p>
          </div>
          <div>
            <PostFooter />
          </div>
        </div>
    </div>
  )
}

export default PostCard
