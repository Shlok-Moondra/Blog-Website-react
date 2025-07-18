import React from 'react'
import {useId} from 'react'

function Select({
    options ,
    label,
    className = '',
    ...props

},ref) {
    const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''> 
        </label>}
        <select
        {...props}
        ref = {ref}
        id={id}>

        </select>
    </div>
  )
}

export default Select
