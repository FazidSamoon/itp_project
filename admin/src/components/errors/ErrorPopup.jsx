import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

const ErrorPopup = ({error, setErrorState}) => {
  return (
    <div className='flex h-screen w-screen backdrop-blur-sm items-center justify-center transition-all ease-in-out duration-700'>
        <div className='w-1/2 h-1/2 flex flex-col items-center justify-center bg-white shadow-xl relative p-4'>
            <CloseIcon className='absolute top-4 right-4 cursor-pointer' sx={{ fontSize: 30 }} onClick={() => setErrorState(false)} />
            <ErrorOutlineIcon className='text-red-700' sx={{ fontSize: 90 }}/>
            <span className='text-3xl font-bold mt-4'>{error.statusCode}</span>
            <span className='text-2xl font-semibold text-center'>{error.message}</span>
        </div>
    </div>
  )
}

export default ErrorPopup