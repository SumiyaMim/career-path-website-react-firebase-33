/* eslint-disable no-unused-vars */
import React from 'react'
import user from '../../assets/images/user.png';

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-[#f1f3ff] to-[#f5f1ff] mb-16 pt-10'>
      <div className='px-8 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0'>
        <div>
          <h1 className='text-4xl font-extrabold mb-4 leading-snug'>One Step <br /> Closer To Your <br /><span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text'>Dream Job</span></h1>
          <p className='text-xs lg:text-sm text-[#757575] font-medium mb-5 lg:w-[66%]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm">Get Started</button>
        </div>
        <div>
          <img src={user} />
        </div>
      </div>
    </div>
  )
}

export default Banner
