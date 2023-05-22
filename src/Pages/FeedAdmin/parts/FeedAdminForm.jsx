import React, { useState } from 'react'
import Button from '../../../component/Buttons'
import TextInput from '../../../component/TextInput'
import { postData } from '../../../services/api'
import endPoints from '../../../services/endpoints'

function FeedAdminForm({getRedingUrls}) {
  const [feedData, setFeedData] = useState({})
  const [errors, setErrors] = useState({})
  const [loading,  setLoading] = useState(false)

  const addFeeds = () =>{
    setLoading(true)
    setErrors({})
    let errors = {}

    if (!feedData.feedurl) {
      errors["feedurl"] = "required";
    }
    if (!feedData.feedtitle) {
      errors["feedtitle"] = "required";
    }
    if (!feedData.websiteurl) {
      errors["websiteurl"] = "required";
    }
    
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      setLoading(false)
      return;
    }

    postData(endPoints.ADD_FEED,(res)=>{
      if(res){
        getRedingUrls()
        setFeedData({})
        setLoading(false)

      }else{
        setLoading(false)
      }
    },feedData)
  }
  return (
    <div>
      <TextInput label="Feed URL"
        name="feedurl"
        onChange={(e) => {
          setFeedData({
            ...feedData,
            [e.target.name]: e.target.value
          })
        }}
        error={errors.feedurl}
        onFocus={() =>
          setErrors({ ...errors, feedurl: null })
        }
      />
      <TextInput label="Feed Title"
        name="feedtitle"
        onChange={(e) => {
          setFeedData({
            ...feedData,
            [e.target.name]: e.target.value
          })
        }}
        error={errors.feedtitle}
        onFocus={() =>
          setErrors({ ...errors, feedtitle: null })
        }
      />
      <TextInput label="Website URL"
        name="websiteurl"
        onChange={(e) => {
          setFeedData({
            ...feedData,
            [e.target.name]: e.target.value
          })
        }}
        error={errors.websiteurl}
        onFocus={() =>
          setErrors({ ...errors, websiteurl: null })
        }
      />
      <Button text={loading ? "Please wait..." :"Submit"} className="mt-4" onClick={addFeeds} />
    </div>
  )
}

export default FeedAdminForm
