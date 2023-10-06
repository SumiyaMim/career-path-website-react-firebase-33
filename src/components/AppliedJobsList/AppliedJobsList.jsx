/* eslint-disable no-unused-vars */
import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJobsList = ({job}) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

  return (
    <div className='flex flex-col md:flex-row items-center justify-between border rounded-md p-8 mb-5 gap-5'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div className='bg-[#F4F4F4] flex items-center justify-center w-full md:w-44 h-44 rounded-md'>
                <img src={logo} className='w-24'/>
            </div>
            <div>
                <h2 className="text-[#474747] font-bold text-lg mb-1">{job_title}</h2>
                <p className="text-[#757575] font-bold mb-3">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                        {remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                        {job_type}
                    </button>
                </div>
                <div className="mt-4 flex gap-5 text-[#757575] font-semibold mb-4">
                    <h2 className="flex gap-2 items-center">
                        <FiMapPin className="text-lg md:text-xl"></FiMapPin> <span className="md:text-sm lg:text-base">{location}</span>
                    </h2>
                    <h2 className="flex gap-2 items-center">
                        <AiOutlineDollar className="text-lg md:text-xl"></AiOutlineDollar> <span className="md:text-sm lg:text-base">{salary}</span>
                    </h2>
                </div>
            </div>
        </div>
        <div>
            <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm">View Details</button>
        </div>
    </div>
  )
}

export default AppliedJobsList
