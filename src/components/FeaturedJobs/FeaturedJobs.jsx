/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Job from '../Job/Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
     // this is not the best way to load show all data 
     const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

  return (
    <div>
       <div className="text-center mb-10">
            <h2 className="text-3xl text-[#1A1919] font-extrabold mb-2">Featured Jobs</h2>
            <p className='text-xs text-[#757575] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
         </div>
         <div className={dataLength === jobs.length ? 'hidden' : 'text-center py-10'}>
            <button onClick={() => setDataLength(jobs.length)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-md text-white font-bold text-sm">See All Jobs</button>
         </div>
    </div>
  )
}

export default FeaturedJobs
