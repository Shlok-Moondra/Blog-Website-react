import React ,{userId} from 'react'


const input = React.forwardRef(function input ({
    label,
    type = 'text',
    className = '',
    ...props
},ref){
    return (
        <div className='w-full'>
            {label && <label classname = 'inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}</label>
            }
            <input
            type = {type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
            
        </div>
    )
})
  

export default input
