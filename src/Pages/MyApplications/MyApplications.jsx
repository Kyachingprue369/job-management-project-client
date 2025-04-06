import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [user.email])
  return (
    <div>
      <h3 className='text-xl font-bold py-5'>My Applications: {jobs.length}</h3>
      {/* Table data */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              jobs.map((job, index) => <tr key={index}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.title}
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.category}</span>
                </td>
                <th>
                  <button className="btn btn-ghost">Delete</button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;