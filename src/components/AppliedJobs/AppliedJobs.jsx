/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJobsList from '../AppliedJobsList/AppliedJobsList';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])

    return (
        <div>
        <Helmet>
           <title>Career Path | Applied Jobs</title>
        </Helmet>
          <div className='bg-gradient-to-r from-[#f1f3ff] to-[#f5f1ff] py-20 mb-16'>
            <h2 className="text-xl font-extrabold text-center">Applied Jobs</h2>
          </div>
          <div className='px-8 md:px-10 lg:px-20'>
            <div className='flex justify-end'>
              <details className="dropdown dropdown-end mb-4">
                    <summary className="m-1 btn normal-case gap-0">Filter By <RiArrowDropDownLine className='text-2xl'></RiArrowDropDownLine></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
              <ul>
                  {
                      displayJobs.map(job => <AppliedJobsList key={job.id} job={job}></AppliedJobsList>)
                  }
              </ul>
          </div>
        </div>
    );
};

export default AppliedJobs;