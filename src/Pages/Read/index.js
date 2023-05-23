import React, { useEffect, useState } from 'react'
import { Routes } from 'react-router-dom'
import PostCard from '../../component/PostCard'
import { getData } from '../../services/api'
import endPoints from '../../services/endpoints'
import PostHeader from './PostHeader'

function Read() {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    getData(endPoints.LIST_FEED, (res) => {
      setFeeds(res.details.feedlist)
    })
  }, [])


  return (
    <div className='flex flex-row overflow-auto'>
    <div className="flex flex-row h-screen ">
      {feeds.map((feed) => {
        return <div className="w-96 h-full overflow-y-scroll ">
          <div className="sticky top-0 bg-black1.2 p-1">
            <PostHeader title={feed.feed_title} />
          </div>
          <div className="bg-black1.2">
            {feed?.data.map((item) => <div className='px-1 pt-1'>
              <PostCard feed={item} />
            </div>
            )}
          </div>
        </div>
      })
      }
    </div>
    </div>
  )
}

export default Read
