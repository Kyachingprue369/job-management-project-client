import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBolt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const CardJobs = ({ job }) => {
  const { _id, company_logo, title, jobType, description, company, location, requirements, salaryRange } = job;
  return (
    <div>
      <section className="p-3 w-[350px] mx-auto rounded-2xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={company_logo}
              alt="LinkedIn"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{company}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <CiLocationOn /> {location}
              </p>
            </div>
          </div>
          <div>
            <FaBolt className='text-green-500 text-xl' />
          </div>
        </div>
        <h2 className="text-xl font-bold mt-3">{title}</h2>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <LuBriefcaseBusiness /> {jobType}  <IoMdTime className='ml-3' /> 4 minutes ago
        </p>

        <p className="text-gray-600 text-sm mt-3">
          {description}
        </p>

        <div className="flex gap-2 flex-wrap mt-3">
          {
            requirements.map((require, index) => <span key={index} className="px-3 py-1 text-sm bg-gray-200 rounded-lg">{require}</span>)
          }
        </div>

        <div className="flex justify-between items-center mt-4">
          <p><span className='font-bold text-xl'>Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
          <Link to={`/jobs/${_id}`}> <button className="bg-blue-500 text-white btn rounded-lg">Apply Now</button></Link>
        </div>
      </section>
    </div>
  );
};

export default CardJobs;