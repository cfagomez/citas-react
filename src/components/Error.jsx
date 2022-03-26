import React from 'react'

const Error = ({error}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-0 rounded-md mt-5'>
        {error}
    </div>
  )
}

export default Error