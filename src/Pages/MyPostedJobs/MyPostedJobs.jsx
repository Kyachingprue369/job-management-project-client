import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [user.email])
  return (
    <div>
      <h3 className='text-xl font-bold py-3'>All Jobs Category: {jobs.length} </h3>
      <div className="overflow-x-auto my-5 mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Nu:</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map((job, index) => <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>Delete</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;