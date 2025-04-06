import React, { useContext, useState } from 'react';
import registerLogo from "../../assets/Lottie/register.json"
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';
import GoogleLogin from '../Google/GoogleLogin';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Register = () => {
  const [error, setError] = useState('');
  const { createUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userRegister = { name, email, password };
    console.log("text user register", userRegister);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters, include 1 uppercase, 1 lowercase, and 1 number.');
      return;
    }
    setError('');
    // create user data in firebase
    createUserData(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('🦄 Register successfully!', {
          position: "top-center",
          autoClose: 3000,
        });
        navigate(from);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className='w-10/12 mx-auto'>
      <div className='mt-3'>
        <Link to="/" className='btn rounded-xl btn-primary'><FaArrowLeftLong /> Back home</Link>
      </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-72 md:w-[600px]">
            <Lottie animationData={registerLogo}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" className="input" name='name' placeholder="Enter your name" required />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Enter your email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Enter your password" required />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
              <p>Already have an account? please <Link to="/login" className='text-blue-600 underline'>login</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;