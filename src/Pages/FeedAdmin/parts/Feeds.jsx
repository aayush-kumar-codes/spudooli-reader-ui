import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Spinner } from '../../../component/Loader';
import { DeleteModal } from '../../../component/Modals';
import { api, getData, postData } from '../../../services/api';
import endPoints from '../../../services/endpoints';


function Feeds({ readingUrls, getRedingUrls }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [itemId, setItemId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  function openModal(id) {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setItemId('')
  }

  const deleteFeed = () => {
    if (itemId) {
      setIsLoading(true)
      postData(`${endPoints.DELETE_FEED}/${itemId}`, (res) => {
        if (res) {
          getRedingUrls()
          closeModal()
          setIsLoading(false)
        }
      }, null)
    }
  }

  return (
    <div>
      {readingUrls.length ?
        <div className="border-2 flex flex-col mt-4">
        {readingUrls?.map((item, index) => {
          return (
            <div className={`flex justify-between text-sky-700 text-base border-b border-0 no-underline p-2 ${index % 2 == 0 ? 'bg-slate-200' : 'bg-white'} hover:bg-sky-700 hover:text-white `} href={item[2]} key={item[0]}>
              <p>{item[1]}</p>
              <button className='px-4 py-2' onClick={() => {
                setItemId(item[0])
                openModal()
              }}>
                <FaTrashAlt color='red' />
              </button>
            </div>
          );
        })}
      </div> : 
      <div className='flex justify-center mt-12'>
        <Spinner />
        </div>
      }
      <DeleteModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        action={() => deleteFeed(itemId)}
        isLoading = {isLoading}
      />
    </div>
  )
}

export default Feeds
