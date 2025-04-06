import React from 'react';

const AddJob = () => {

  const handleAddJob = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.salaryRange = { min, max, currency };
  }
  return (
    <div className='w-10/12 mx-auto'>
      <h3 className='text-center my-4 md:my-10 text-2xl md:text-4xl font-bold'>Add Job </h3>
      <form onSubmit={handleAddJob}>
        <div className='my-4 md:flex items-center gap-6'>
          <div className=' md:flex-1'>
            <label className="fieldset-label pb-2">Job Type</label>
            <select defaultValue="Pick a color" name='jobType' className="select select-info w-full" required>
              <option disabled={true}>Pick a Job</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Contractual</option>
            </select>
          </div>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Job Title</label>
            <select defaultValue="Pick a color" name='title' className="select select-info w-full" required>
              <option disabled={true}>Pick a Job Title</option>
              <option>Software Engineer</option>
              <option>Marketing Specialist</option>
              <option>Finance Manager</option>
              <option>Content Writer</option>
              <option>Teaching Assistant</option>
              <option>Project Manager</option>
              <option>Data Scientist</option>
              <option>UI/UX Designer</option>
              <option>DevOps Engineer</option>
              <option>Mobile App Developer</option>
              <option>Game Developer</option>
              <option>Web Developer</option>
              <option>Graphic Designer</option>
              <option>Illustrator</option>
              <option>Video Editor</option>
              <option>Digital Marketer</option>
              <option>AI Developer</option>
              <option>Machine Learning engineer</option>
            </select>
          </div>
        </div>
        {/* 2nd field */}
        <div className='my-4 md:flex items-center gap-6'>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Location</label>
            <input type="text" className="input input-info w-full" name='location' placeholder="Enter you location" required />
          </div>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Job Category</label>
            <select defaultValue="Pick a color" name='category' className="select select-info w-full" required>
              <option disabled={true}>Pick a Job Category</option>
              <option>Development</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Data Science</option>
              <option>Management</option>
              <option>Teaching</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Accounting</option>
            </select>
          </div>
        </div>
        {/* 3rd step */}
        <div className='mb-5'>
          <label className="fieldset-label pb-2">Application Deadline</label>
          <input type="date" className="input input-info w-full" name='applicationDeadline' placeholder="Email" required />
        </div>
        {/* 4 step */}
        <p className='text-gray-800'>Salary Range</p>
        <div className='mb-5 md:flex items-center gap-4'>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Min</label>
            <input type="text" className="input input-info" name='min' placeholder="min" required />
          </div>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Max</label>
            <input type="text" className="input input-info" name='max' placeholder="max" required />
          </div>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">Currency</label>
            <select defaultValue="Pick a color" name='currency' className="select select-info w-full" required>
              <option disabled={true}>Job currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>CHF</option>
              <option>AUD</option>
              <option>NZO</option>
              <option>INR</option>
              <option>RUB</option>
              <option>SGD</option>
              <option>MXN</option>
              <option>ZAR</option>
              <option>SEK</option>
              <option>TRY</option>
              <option>KRW</option>
              <option>THB</option>
              <option>PHP</option>
              <option>PKR</option>
              <option>EGP</option>
            </select>
          </div>
        </div>
        {/* 5 step */}
        <div className='my-5'>
          <label className="fieldset-label pb-2">Description</label>
          <textarea className="textarea w-full" name='description' placeholder="Description" required></textarea>
        </div>
        {/* 6 step */}
        <div className='my-5'>
          <label className="fieldset-label pb-2">Company Name</label>
          <input type="text" className="input input-info w-full" name='company' placeholder="Enter you company name" required />
        </div>
        {/* 7 step */}
        <div className='my-5'>
          <label className="fieldset-label pb-2">Requirements</label>
          <textarea className="textarea w-full" name='requirements' placeholder="Requirements" required></textarea>
        </div>
        {/* 8 step */}
        <div className='my-5'>
          <label className="fieldset-label pb-2">Responsibilities</label>
          <textarea className="textarea w-full" name='responsibilities' placeholder="responsibilities" required></textarea>
        </div>
        {/* 9 step */}
        <div className='my-5'>
          <label className="fieldset-label pb-2">Status</label>
          <select defaultValue="active" name='status' className="select select-info w-full" required>
            <option disabled={true}>Job Status</option>
            <option>active</option>
            <option>negative</option>
            <option>off</option>
          </select>
        </div>
        {/* 10 step */}
        <div className='md:flex items-center my-5 gap-5'>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">HR Name</label>
            <input type="text" className="input input-info w-full" name='hr_name' placeholder="Enter hr name" required />
          </div>
          <div className='md:flex-1'>
            <label className="fieldset-label pb-2">HR Email</label>
            <input type="email" className="input input-info w-full" name='hr_email' placeholder="Enter hr email" required />
          </div>
        </div>
        {/* Final company logo */}
        <div className='mb-5 md:mb-10'>
          <label className="fieldset-label pb-2">Company Logo</label>
          <input type="url" className="input input-info w-full" name='company_logo' placeholder="Enter company logo" required />
        </div>
        {/* Submit button */}
        <div className='mb-10 md:mb-20'>
          <button className='btn w-full btn-accent font-bold md:text-xl'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;