import React from 'react';
import { BsBank } from 'react-icons/bs';
import { FaHeadphones, FaLightbulb } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const HeaderCategory = () => {
  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className='text-center'>
        <h3 className='text-5xl py-4 font-bold'>Browse by Category</h3>
        <p className='text-xl text-gray-500 pb-7'>Find the job that's perfect for you about 800+ new jobs everyday
        </p>
      </div>
      <div className='md:flex items-center gap-5 w-full text-center'>
        {/* //category 1 */}
        <div className='flex items-center border border-gray-300 mx-auto rounded-xl p-4 gap-3'>
          <div><HiOutlineSpeakerphone className='text-4xl text-blue-400' /></div>
          <div>
            <h2 className='font-bold'>Marketing & sale</h2>
            <p className='text-gray-500'>1526 Jobs Available</p>
          </div>
        </div>
        {/* // category 2 */}
        <div className='flex items-center mx-auto border-gray-300 border rounded-xl p-4 gap-3'>
          <div><FaHeadphones className='text-4xl text-blue-400' /></div>
          <div>
            <h2 className='font-bold'>Marketing & sale</h2>
            <p className='text-gray-500'>1526 Jobs Available</p>
          </div>
        </div>
        {/* //category 3 */}
        <div className='flex items-center border-gray-300 mx-auto  border rounded-xl p-4 gap-3'>
          <div><BsBank className='text-4xl text-blue-400' /></div>
          <div>
            <h2 className='font-bold'>Marketing & sale</h2>
            <p className='text-gray-500'>1526 Jobs Available</p>
          </div>
        </div>
        {/* //category 4 */}
        <div className='flex items-center mx-auto border-gray-300 border rounded-xl p-4 gap-3'>
          <div><FaLightbulb className='text-4xl text-blue-400' /></div>
          <div>
            <h2 className='font-bold'>Marketing & sale</h2>
            <p className='text-gray-500'>1526 Jobs Available</p>
          </div>
        </div>
        {/* //category 5 */}
        <div className='flex items-center mx-auto border-gray-300 border rounded-xl p-4 gap-3'>
          <div><FcBusinessman className='text-4xl text-blue-400' /></div>
          <div>
            <h2 className='font-bold'>Marketing & sale</h2>
            <p className='text-gray-500'>1526 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;