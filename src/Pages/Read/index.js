import React , {useEffect , useState} from 'react'
import { Routes } from 'react-router-dom'
import PostCard from '../../component/PostCard'
import { getData } from '../../services/api'
import endPoints from '../../services/endpoints'
import PostHeader from './PostHeader'

function Read() {
  const [data, setData] = useState([])

  useEffect(() => {
    getData(endPoints.LIST_FEED, setData)
  }, [])

  console.log(data)
  
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/3 h-full overflow-y-scroll">
        <div className="sticky top-0 bg-black1.2 p-1">
          <PostHeader />
        </div>
        <div className="bg-black1.2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map(() => <div className='px-1 pt-1'>
            <PostCard />
          </div>)}
        </div>
      </div>
      <div className="w-1/3 h-full overflow-y-scroll">
        <div className="sticky top-0 bg-black1.2 p-1">
          <PostHeader />
      </div>
        <div className="bg-black1.2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map(() => <div className='px-1 pt-1'>
            <PostCard />
          </div>)}
        </div>
      </div>
      <div className="w-1/3 h-full overflow-y-scroll">
        <div className="sticky top-0 bg-black1.2 p-1">
          <PostHeader />
      </div>
        <div className="bg-black1.2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map(() => <div className='px-1 pt-1'>
            <PostCard />
          </div>)}
        </div>
      </div>

    </div>
  )
}

export default Read
