import React, { useEffect, useState } from 'react';
import CardJobs from '../CardJobs/CardJobs';

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data)
      })
  }, [])
  return (
    <div>
      <h2 className='text-2xl font-bold text-center py-10'>All Jobs Category : {jobs.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 gap-7 mx-auto'>
        {
          jobs.map(job => <CardJobs key={job._id} job={job}></CardJobs>)
        }
      </div>
    </div>
  );
};

export default LatestJobs;