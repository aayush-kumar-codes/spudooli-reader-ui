import React, { useEffect, useState } from 'react'
import { Routes } from 'react-router-dom'
import { Spinner } from '../../component/Loader'
import PostCard from '../../component/PostCard'
import { getData } from '../../services/api'
import endPoints from '../../services/endpoints'
import PostHeader from './PostHeader'

function Read() {
  const [feeds, setFeeds] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData(endPoints.LIST_FEED, (res) => {
      setFeeds(res.details.feedlist)
      setIsLoading(false)
    })
  }, [])


  return (
    <div className='flex flex-row overflow-auto'>
    {!isLoading ? <div className="flex flex-row h-screen ">
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
    </div> : <div className="absolute left-1/2 top-1/2">
          <Spinner />
        </div>}
    </div>
  )
}

export default Read
