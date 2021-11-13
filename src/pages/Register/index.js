import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { registerationFields, registerInitialValues } from './registerationFields';
import Form from '../../components/Form';

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Registration</h1>
      <Form
        fields={registerationFields}
        initialValues={registerInitialValues}
        btnText="Login"
        onSubmit={val => {
          console.log(val);
        }}
      />

      <Typography variant="body1" gutterBottom>
        Don't Have an Account Please
        {' '}
        <Typography
          onClick={() => navigate('register', { replace: true })}
          variant="button"
          component="span"
        >
          Login
        </Typography>
      </Typography>
    </>
  );
};

export default Register;
