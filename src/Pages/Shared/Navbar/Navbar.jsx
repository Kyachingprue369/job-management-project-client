import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import jobLogo from '../../../assets/job-management-logo.png'
import AuthContext from '../../../context/AuthContext';
import '../../../App.css'

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const links = <div className='flex items-center gap-2'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/myApplications">My Applications</NavLink></li>
    <li><NavLink to="/addJob">Add Jobs</NavLink></li>
    <li><NavLink to="/allJobsCard">All Jobs</NavLink></li>
    <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
  </div>

  //user log out option declare
  const handleLogOut = event => {
    event.preventDefault();
    logOut()
      .then(() => {
        console.log('user logout is successfully')
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="navbar bg-base-100 mt-3 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex items-center'>
            <img
              className='w-8 h-8 md:w-14 md:h-14 rounded-full'
              src={jobLogo} alt="" />
            <a className="btn btn-ghost text-start text-sm md:text-xl">JOB <br /> Management</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          {
            user ? <>
              <button onClick={handleLogOut} className='btn btn-info'>Log out</button>
            </>
              :
              <>
                <Link to="/register" className='underline hover:text-blue-600'>Register</Link>
                <Link to="/login">
                  <button className='btn btn-info'>Login</button>
                </Link>
              </>
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;