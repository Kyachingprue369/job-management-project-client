import React, { useContext } from 'react';
import loginAnimationLottie from '../../assets/Lottie/login.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';
import GoogleLogin from '../Google/GoogleLogin';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginData = { email, password };
    console.log(loginData);
    //Login user in Firebase
    userLogin(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('🦄 Login successfully!', {
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
          <div className="text-center lg:text-left w-72 md:w-[500px]">
            <Lottie animationData={loginAnimationLottie}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Enter your email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Enter your password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
              <p>Create a new account? Please <Link to="/register" className='text-blue-600 underline'>register</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;