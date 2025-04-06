import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleGoogleLogin = event => {
    event.preventDefault()
    //Google Authentication
    googleLogin()
      .then(result => {
        console.log(result.user)
        toast.success('🦄 Google Login successfully!', {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/");
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="divider">OR</div>
      <div className='w-10/12 mx-auto items-center'>
        <button onClick={handleGoogleLogin} className='py-2 px-14 mb-3 text-center font-bold bg-blue-400 rounded-full flex items-center gap-3'> <FaGoogle className='text-orange-700' /> Sign in with Google</button>
      </div>
    </div>
  );
};

export default GoogleLogin;