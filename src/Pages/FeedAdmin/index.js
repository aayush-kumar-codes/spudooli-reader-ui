import React, { useEffect, useState } from 'react'
import ShadowCard from '../../component/ShadowCard'
import { getData } from '../../services/api';
import endPoints from '../../services/endpoints';
import FeedAdminForm from './parts/FeedAdminForm'
import Feeds from './parts/Feeds'

function FeedAdmin() {
  const [readingUrls, setReadingUrls] = useState([]);
  useEffect(() => {
    getRedingUrls()
  }, []);

  const getRedingUrls = () =>{
    getData(endPoints.READING_lIST ,(data)=>{
      setReadingUrls(data.reading_list)
    })
  }
  return (
      <div className='grid grid-cols-2 gap-4'>
        <ShadowCard className='h-96'>
          <div>
            <h1 className='text-2xl font-semibold'>Add a new item</h1>
            <FeedAdminForm getRedingUrls={getRedingUrls} />
          </div>
        </ShadowCard>
        <ShadowCard className="h-3/5 overflow-auto" >
          <div className='py-2'>
          <h1 className='text-2xl font-semibold'>Feed Admin</h1>
          <Feeds getRedingUrls={getRedingUrls} readingUrls={readingUrls} />
          </div>
        </ShadowCard>
      </div>
  )
}

export default FeedAdmin
