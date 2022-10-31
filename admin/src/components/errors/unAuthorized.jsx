import React from 'react'

const UnAuthorized = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center flex-col'>
      <span className='text-8xl font-extrabold text-primary'>401</span>
      <span className='text-3xl font-medium text-primary'>YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE</span>
    </div>
  )
}

export default UnAuthorized