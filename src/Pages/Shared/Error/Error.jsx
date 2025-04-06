import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='w-6/12 mx-auto my-10'>
      <h3 className='text-center font-bold text-4xl'>This Page is not Defined</h3>
      <h4 className='text-center py-4'>Page Not Found</h4>
      <div className='mx-auto text-center mt-5'>
        <Link to="/" className='btn bg-blue-500 text-white justify-center'>Go Back</Link>
      </div>
    </div>
  );
};

export default Error;