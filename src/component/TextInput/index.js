import React from 'react'

function TextInput({ type = "text", name, value,error, className, labelClass, label, onChange, onFocus }) {
  return (
    <div className='flex flex-col'>
      {label && <label className={`text-sky-700 mt-4 ${labelClass}`}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        className={`block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40 ${className}`}
        onChange={onChange}
        onFocus={onFocus}
      />
      {error && <span className='text-red-800'>{error}</span>}
    </div>
  )
}

export default TextInput
