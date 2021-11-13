import React, { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import AuthProvider, { AuthContext } from './context/authContext';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

const AuthWrapper = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname;

  useEffect(() => {
    if (isLoggedIn) {
      if (!pathName.includes('home')) navigate('/home', { replace: true });
    } else if (pathName !== '/') navigate('/', { replace: true });
  }, [isLoggedIn, pathName]);

  return children;
};

const App = () => (
  <AuthProvider>
    <Routes>
      <Route
        path="/"
        element={
          <AuthWrapper>
            <AuthLayout />
          </AuthWrapper>
        }
      >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route
        element={
          <AuthWrapper>
            <MainLayout />
          </AuthWrapper>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="home/cart" element={<Cart />} />
        <Route path="home/product" element={<Products />} />
      </Route>
    </Routes>
  </AuthProvider>
);

export default App;
