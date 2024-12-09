import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='m-20'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-6xl font-semibold'>404 Not Found</h1>
            <p>Your visited page was not found. You may go to the home page.</p>
            <Link className='bg-red-500 text-white px-5 py-2 rounded-md mt-10' to={'/'}>Back to home page</Link>
        </div>
    </div>
  )
}

export default ErrorPage