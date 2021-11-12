import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
);

export default App;
