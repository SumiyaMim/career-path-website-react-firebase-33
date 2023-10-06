/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { FiMapPin } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';
import { Helmet } from 'react-helmet-async';



const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job); 

    const handleApplyNow = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

  return (
    <div>
       <Helmet>
           <title>Job Details - {id}</title>
       </Helmet>
      <div className='bg-gradient-to-r from-[#f1f3ff] to-[#f5f1ff] py-20 mb-16'>
            <h2 className="text-xl font-extrabold text-center">Job Details</h2>
      </div>
      <div className='px-8 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-10'>
        <div className='flex-1'>
            <h3 className='font-extrabold text-xs text-justify leading-6'>Job Description: <span className='text-[#757575] font-semibold'>{job.job_description}</span></h3>
            <br />
            <h3 className='font-extrabold text-xs text-justify leading-6'>Job Responsibility: <span className='text-[#757575] font-semibold'>{job.job_responsibility}</span></h3>
            <br />
            <h3 className='font-extrabold text-xs leading-6'>Educational Requirements: 
            <br />
            <span className='text-[#757575] font-semibold'>{job.educational_requirements}</span>
            </h3>
            <br />
            <h3 className='font-extrabold text-xs leading-6'>Experiences: 
            <br />
            <span className='text-[#757575] font-semibold'>{job.experiences}</span>
            </h3>
        </div>
        <div>
            <div className='bg-gradient-to-r from-[#e6eaff] to-[#f3efff] rounded-md p-10 mb-5'>
                <h3 className='text-base font-extrabold mb-3'>Job Details</h3>
                <hr className='border-[#bcc5ff] mb-3'/>
                <h4 className="flex gap-2 items-center text-xs md:text-sm font-bold mb-1"> <AiOutlineDollar className="text-[#7E90FE] text-base md:text-lg"></AiOutlineDollar>Salary: <span className='text-[#757575] font-semibold'>{job.salary}(Per Month)</span></h4>
                <h4 className="flex gap-2 items-center text-xs md:text-sm font-bold mb-3"><IoCalendarOutline className="text-[#7E90FE] text-base md:text-lg"></IoCalendarOutline>Job Title: <span className='text-[#757575] font-semibold'>{job.job_title}</span></h4>
                <hr className='border-[#bcc5ff] mb-3'/>
                <h4 className="flex gap-2 items-center text-xs md:text-sm font-bold mb-1"><BsTelephone className="text-[#7E90FE] text-base md:text-lg"></BsTelephone>Phone: <span className='text-[#757575] font-semibold'>{job.contact_information.phone}</span></h4>
                <h4 className="flex gap-2 items-center text-xs md:text-sm font-bold mb-1"><HiOutlineMail className="text-[#7E90FE] text-base md:text-lg"></HiOutlineMail>Email: <span className='text-[#757575] font-semibold'>{job.contact_information.email}</span></h4>
                <h4 className="flex gap-2 items-center text-xs md:text-sm font-bold mb-1"><FiMapPin className="text-[#7E90FE] text-base md:text-lg"></FiMapPin>Address: <span className='text-[#757575] font-semibold'>{job.contact_information.address}</span></h4>
            </div>
            <button onClick={handleApplyNow}  className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails
