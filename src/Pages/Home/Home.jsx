import React from 'react';
import Banner from '../../components/Banner/Banner';
import HeaderCategory from '../../components/Category/HeaderCategory';
import Hiring from '../../components/Hiring/Hiring';
import LatestJobs from '../../components/LatestJob/LatestJobs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HeaderCategory></HeaderCategory>
      <Hiring></Hiring>
      <LatestJobs></LatestJobs>
    </div>
  );
};

export default Home;