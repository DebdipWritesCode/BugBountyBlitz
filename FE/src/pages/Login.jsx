import React, { useState, useEffect } from 'react'
import elevateLogo from '../assets/elevateLogo.png'
import BBBLogo from '../assets/BBBLogo.png'
import axios from "../services/axiosInstance"
import { setToken } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username,
      password
    }
    setLoading(true);

    try {
      const response = await axios.post("/auth/login", formData);
      if (response.status === 200) {
        const { token, isAdmin } = response.data;
        setToken(token);

        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/bugs");
        }
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || 'Invalid username or password';
      setErrorMessage(message);
      setShowError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <div className='flex h-screen justify-center items-center font-roboto gap-12'>
      <div className="flex items-center flex-col px-10">
        <img src={elevateLogo} alt="Elevate Logo" />
        <h1 className='font-semibold text-[34px] text-center'>Welcome to Bug Bounty Blitz</h1>
        <p className='text-[#313957] text-[20px] text-center mt-4'>
          Today is a new day. It's your day. You shape it.<br />Sign in to start your bug hunt.
        </p>
        <form className='mt-10 w-full px-2' onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label className='font-semibold mb-2 text-[#0C1421]' htmlFor="username">Username</label>
            <input className='bg-[#F7FBFF] outline-none p-3 border border-[#D4D7E3] rounded-xl' type="text" id="username" name="username" required placeholder='Enter your username' onChange={handleUsernameChange} />
          </div>
          <div className="flex flex-col w-full mt-3">
            <label className='font-semibold mb-2 text-[#0C1421]' htmlFor="password">Password</label>
            <input className='bg-[#F7FBFF] outline-none p-3 border border-[#D4D7E3] rounded-xl' type="password" id="password" name="password" required placeholder='Enter your password' onChange={handlePasswordChange} />
          </div>
          <div>
            <button
              className={`p-4 w-full mt-8 text-white rounded-xl transition-colors duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#162D3A] hover:bg-[#2b5770]'}`}
              type="submit"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        {showError && (
          <div className={`bg-red-400 text-white absolute p-3 font-bold top-10 rounded-xl 
            animate-fadeIn ${!showError && 'animate-fadeOut'} transition-opacity duration-1000`}>
            <p>{errorMessage}</p>
          </div>
        )}
        <p className='mt-8 mb-3 text-[#959CB6]'>2024 Made by Elevate</p>
      </div>
      <div className="hidden md:block h-[600px]">
        <img className='h-full' src={BBBLogo} alt="Bug Bounty Blitz" />
      </div>
    </div>
  )
}

export default Login;
