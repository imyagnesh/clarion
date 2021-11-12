import { Paper } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './authLayout.css';

const AuthLayout = () => (
  <main className="container">
    <Paper
      sx={{
        width: '300px',
      }}
      className="login-container"
      elevation={3}
    >
      <Outlet />
    </Paper>
  </main>
);

export default AuthLayout;
