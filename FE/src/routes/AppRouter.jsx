import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Login from "../pages/Login"
import AdminPage from "../pages/AdminPage"
import SubmitBug from "../pages/SubmitBug"
import ViewBugs from "../pages/ViewBugs"

import Layout from "../components/Layout"
import { getToken, isAuthenticated, removeToken } from '../services/authService'

const AppRouter = () => {
  const token = getToken()
  const user = null;

  if (token) {
    try {
      user = jwtDecode(token)
    } catch (err) {
      console.log(err)
      removeToken();
    }
  }

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />
  }

  const AdminRoute = ({ children }) => {
    return isAuthenticated() && user?.isAdmin ? children : <Navigate to="/login" />
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/bugs" element={
          <PrivateRoute>
            <Layout user={user} >
              <ViewBugs />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/submit" element={
          <PrivateRoute>
            <Layout user={user} >
              <SubmitBug />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <AdminRoute>
            <Layout user={user} >
              <AdminPage />
            </Layout>
          </AdminRoute>
        } />
      </Routes>
    </Router>
  )
}

export default AppRouter