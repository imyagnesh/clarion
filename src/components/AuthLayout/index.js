import React from 'react';
import { Outlet } from 'react-router-dom';
import './authLayout.css';

const AuthLayout = () => (
  <main className="container">
    <Outlet />
  </main>
);

export default AuthLayout;
