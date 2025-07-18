import React from 'react'

function Button({
    children,
    type = 'button',
    bgcolor = 'bg-blue-500',  
    textColor = 'text-white', 
    className = '',
    ...props 
}) {
  return (
    <button className={`px-4 py-2 rounded ${bgcolor} ${textColor} ${className}`} {...props} >
      {children}
    </button>
  )
}

export default Button
