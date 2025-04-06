import React from 'react';
import team1 from '../../assets/team/team1.webp';
import team2 from '../../assets/team/team2.jpg';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-300 min-h-screen">
        <div className="hero-content flex-col w-full lg:flex-row-reverse">
          <div className='flex-1'>
            <motion.img
              animate={{ y: [-50, 50, -50] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={team1}
              className="mx-auto rounded-t-4xl rounded-br-4xl border-l-8 border-blue-600 border-b-8 shadow-2xl" />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              src={team2}
              className="mx-auto w-80 rounded-t-4xl rounded-br-4xl border-l-8 border-blue-600 border-b-8 shadow-2xl" />
          </div>
          <div className='flex-1'>
            <h1 className="text-5xl font-bold pb-6">
              The <span className='text-blue-600'>Easiest Way</span> <br /> to Get Your New Job
            </h1>
            <p className="py-3 pb-7 text-xl">
              Each month, more than 3 million job seekers turn to <br />
              website in their search for work, making over 140,000 <br />
              applications every single day
            </p>
            <div className='bg-white rounded-xl border-gray-300 border-2 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <p className='text-xl pl-4'>Industry</p>
                <p className='text-xl pl-5'>Location</p>
              </div>
              <div>
                <button className="btn btn-primary my-4 mr-3 py-2 px-4">Get Started</button>
              </div>
            </div>
            <div className='flex items-center pt-12 gap-3'>
              <div><h2>Popular Searches:</h2></div>
              <div className='flex gap-2 items-center'>
                <p className='underline text-blue-700'>Designer,</p>
                <p className='underline text-blue-700'>Web,</p>
                <p className='underline text-blue-700'>IOS,</p>
                <p className='underline text-blue-700'>Developer,</p>
                <p className='underline text-blue-700'>PHP,</p>
                <p className='underline text-blue-700'>Senior,</p>
                <p className='underline text-blue-700'>Engineer,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
