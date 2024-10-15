import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children, user }) => {
  return (
    <div>
      <Navbar user={user} />
      <div className="">
        <Sidebar isAdmin={user.is_admin} />
        <main className="">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout