import React from 'react'

function ShadowCard({children , className}) {
  return (
    <div className={`shadow-3xl p-4 rounded-lg min-h-min ${className}`}>
    {children}
  </div>
  )
}

export default ShadowCard
