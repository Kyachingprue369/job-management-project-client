import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log(id, user);

  const handleApplicationLink = event => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    }

    //job Application data send to database
    fetch('http://localhost:5000/job-applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          toast('🦄 Job Application successfully', {
            position: "top-right",
            autoClose: 3000,
          })
        }
        navigate('/myApplications')
      })
  }
  return (
    <div className='w-6/12 mx-auto mt-20'>
      <h2 className='text-5xl font-bold text-center py-10'>Job Application </h2>
      <form onSubmit={handleApplicationLink} className="fieldset">
        <label className="fieldset-label font-bold text-black pt-2">LinkedIn URL</label>
        <input type="url" className="input w-full" name='linkedIn' placeholder="Enter you linkedIn URL" />
        <label className="fieldset-label font-bold text-black pt-2">Github URL</label>
        <input type="url" className="input w-full" name='github' placeholder="Enter you github URL" />
        <label className="fieldset-label font-bold text-black pt-2">Resume URL</label>
        <input type="url" className="input w-full" name='resume' placeholder="Enter you resume URL" />
        <button className="btn btn-neutral mt-4 mb-14 ">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;