import React from 'react'

function Button({text , className , onClick}) {
  return (
    <button className={`text-white bg-sky-700 w-full py-2 rounded-lg ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
