import React from 'react';
import undrawImg1 from '../../assets/undraw/undraw1.png'
import undrawImg2 from '../../assets/undraw/undraw2.png'
import { MdVerified } from 'react-icons/md';

const Hiring = () => {
  return (
    <div className='w-10/12 mx-auto my-20 border border-gray-300 rounded-xl md:flex justify-between items-center'>
      <div>
        <img className='w-60 ml-2' src={undrawImg1} alt="" />
      </div>
      {/* // Main Part */}
      <div className='md:flex items-center gap-4'>
        <div>
          <h2 className='text-xl text-gray-500'>
            WE ARE <br />
            <span className='text-4xl font-bold text-black'>HIRING</span>
          </h2>
        </div>
        <div>
          <h2 className='text-gray-500 text-xl pt-6'>
            Let's <span className='text-black'>work</span> Together <br />
            & <span className='text-black'>Explore</span> Opportunities
          </h2>
        </div>
        <div className='ml-4 mt-5'>
          <button className='btn btn-primary hover:text-white hover:bg-blue-950 gap-3'><MdVerified className='text-xl' /> Apply now</button>
        </div>
      </div>
      <div>
        <img className='w-72 mr-2' src={undrawImg2} alt="" />
      </div>
    </div>
  );
};

export default Hiring;