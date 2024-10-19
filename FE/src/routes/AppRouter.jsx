import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import AdminPage from "../pages/AdminPage";
import SubmitBug from "../pages/SubmitBug";
import ViewBugs from "../pages/ViewBugs";

import Layout from "../components/Layout";
import { isAuthenticated } from '../services/authService';
import TeamBugs from '@/pages/TeamBugs';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/login" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to Login
      </a>
    </div>
  );
};

const AppRouter = () => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  const AdminRoute = ({ children }) => {
    // In AdminRoute, Layout will handle user logic, so we just focus on checking if authenticated.
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/bugs" element={
          <PrivateRoute>
            <Layout>
              <ViewBugs />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/submit" element={
          <PrivateRoute>
            <Layout>
              <SubmitBug />
            </Layout>
          </PrivateRoute>
        } />

        <Route path="/admin" element={
          <AdminRoute>
            <Layout>
              <AdminPage />
            </Layout>
          </AdminRoute>
        } />
        <Route path="/admin/bugs/:team/:userId" element={
          <AdminRoute>
            <Layout>
              <TeamBugs/>
            </Layout>
          </AdminRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
