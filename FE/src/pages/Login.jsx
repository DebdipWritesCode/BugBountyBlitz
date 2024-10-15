import React from 'react'
import { BBBLogo, elevateLogo } from "../assets"

const Login = () => {
  return (
    <div>
      <div className="">
        <img src={elevateLogo} alt="Elevate Logo" />
        <h1>Welcome to Bug Bounty Blitz</h1>
        <p>Today is a new day. It's your day. You shape it. 
        Sign in to start managing your projects.</p>
        <form>
          <div className="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="">
            <button type="submit">Sign in</button>
          </div>
        </form>
        <p>2024 Made by Elevate</p>
      </div>
      <div className="">
        <img src={BBBLogo} alt="Bug Bounty Blitz" />
      </div>
    </div>
  )
}

export default Login