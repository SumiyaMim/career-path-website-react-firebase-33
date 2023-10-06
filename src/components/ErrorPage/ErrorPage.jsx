/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex items-center flex-col gap-4 my-48 lg:my-52'>
        <h2 className='font-extrabold text-2xl'>Oops!!! </h2>
        <Link to="/" className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm'>Go back to home</Link>
    </div>
  )
}

export default ErrorPage
