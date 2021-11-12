import React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        width: '300px',
      }}
      className="login-container"
      elevation={3}
    >
      <h1>Login</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <FormControl>
          <InputLabel htmlFor="txt-email">Email address</InputLabel>
          <Input id="txt-email" aria-describedby="txt-email-text" />
          <FormHelperText id="txt-email-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="txt-password">Password</InputLabel>
          <Input id="txt-password" aria-describedby="text-password-text" />
          <FormHelperText id="text-password-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <Button variant="contained">Login</Button>

        <Typography variant="body1" gutterBottom>
          Don't Have an Account Please{' '}
          <Typography
            onClick={() => navigate('register')}
            variant="button"
            component="span"
          >
            Register
          </Typography>
        </Typography>
      </form>
    </Paper>
  );
};

export default Login;
