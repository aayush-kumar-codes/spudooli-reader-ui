import React from 'react';
import Modal from 'react-modal';
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'500px'
  },
};

export function DeleteModal({ closeModal, openModal, modalIsOpen, action, isLoading }) {

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
      <div className="flex flex-col items-center">
        <AiOutlineExclamationCircle size={'6rem'} color="#0369A1" />
        <p className="text-gray-800 text-lg mb-8">
          Are you sure you want to proceed?
        </p>
        <div className='flex'>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button className="bg-sky-600 text-white py-2 px-4 rounded ml-4 hover:bg-sky-700" onClick={action}>
          {isLoading ? 'Loading...'  : 'Proceed'}
        </button>
        </div>
      </div>
    </Modal>
  );
}