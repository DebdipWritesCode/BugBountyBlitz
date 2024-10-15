import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../services/authService'

const Navbar = ({ user }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken();
    navigate('/login')
  }

  return (
    <nav className=''>
      <div className="">
        <div className="">
          <img src="" alt="Elevate Logo" />
        </div>
        <h3>Bug Bounty Blitz</h3>
      </div>
      <div className="">
        <div className="">
          <img src="" alt="Avatar" />
        </div>
        <div className="">
          <p>{user.username}</p>
          <p>{user.team_name}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar