import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const jobData = useLoaderData();
  const { _id, title, company_logo, location, applicationDeadline, category, company, description } = jobData;
  return (
    <div>
      <div className='flex gap-8 items-center'>
        <img className='w-10 h-10 mt-4' src={company_logo} alt="" />
        <h3 className='text-4xl font-bold pt-3'>{title}</h3>
      </div>
      <p className='py-3 text-gray-500'>{location}</p>
      <p className='py-3'>{applicationDeadline}</p>
      <p className='py-3'>{category}</p>
      <p className='text-2xl font-bold py-2'>{company}</p>
      <p className='py-2 '>{description}</p>
      <div className='my-5'>
        <Link to={`/jobApply/${_id}`} className='btn btn-primary'>Apply now</Link>
      </div>
    </div>
  );
};

export default JobDetails;