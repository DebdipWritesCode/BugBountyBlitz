import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {jwtDecode} from 'jwt-decode';
import { getToken, removeToken } from '../services/authService';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (err) {
        console.log("Error decoding token:", err);
        removeToken();
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar user={user} />
      <div className="layout-container flex">
        <Sidebar isAdmin={user?.isAdmin} />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
