import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewApplications = () => {
  const applications = useLoaderData();
  console.log(applications);

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value
    }
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast('🦄 Wow status added successfully!', {
            position: "top-right",
            autoClose: 3000
          })

        }
      })
  }
  return (
    <div>
      <h3>All Job Applications: {applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              applications.map((apply, index) => <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{apply.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={(e) => handleStatusUpdate(e, apply._id)} defaultValue={apply.status || 'Changes Status'} className="select select-accent">
                    <option disabled={true}>Changes Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;