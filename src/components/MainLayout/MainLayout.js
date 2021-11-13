import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AuthContext } from '../../context/authContext';

const MainLayout = ({ totalItems }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>

          <Button color="inherit" onClick={() => {
            navigate('home/product');
          }}>
            ADD PRODUCTS
          </Button>

          <IconButton
            onClick={() => {
              navigate('home/cart');
            }}
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </main>
  );
};

export default MainLayout;
