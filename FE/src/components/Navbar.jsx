import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../services/authService'
import elevateLogo from '../assets/elevateLogo.png'
import BBBLogo from '../assets/BBBLogo.png'

const Navbar = ({ user }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken();
    navigate('/login')
  }

  return (
    <nav className='flex justify-between items-center pr-6 font-roboto'>
      <div className="flex items-center">
        <div className=" h-[80px]">
          <img className='h-full' src={elevateLogo} alt="Elevate Logo" />
        </div>
        <h3 className='ml-4 text-[28px] font-semibold text-[#162D3A]'>Bug Bounty Blitz</h3> {/* Updated Styles */}
      </div>
      <div className="flex gap-4 items-center">
        <div className="h-[50px] w-[50px] rounded-full">
          <img className='h-full w-full rounded-full' src={BBBLogo} alt="Avatar" />
        </div>
        <div className="flex flex-col justify-center">
          <p className=' font-semibold text-lg text-[#313638]'>{user.username}</p>
          <p className=' text-[#6D747A] text-[14px] font-normal'>{user.team_name}</p>
        </div>
        <button
          className='ml-8 mr-6 px-4 py-2 bg-[#162D3A] rounded-xl text-white transition-colors duration-300 hover:bg-[#2b5770]' 
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
