import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import AdminPage from "../pages/AdminPage";
import SubmitBug from "../pages/SubmitBug";
import ViewBugs from "../pages/ViewBugs";

import Layout from "../components/Layout";
import { isAuthenticated } from '../services/authService';

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
      </Routes>
    </Router>
  );
};

export default AppRouter;