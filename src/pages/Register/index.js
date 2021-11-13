import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import './register.css';
import Form from '../../components/Form';
import { registerFields, registerInitialValues } from './registerFields';
import { AuthContext } from '../../context/authContext';
// import { LocaleContext } from '../../context/localeContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  //   const { locale, setLocale } = useContext(LocaleContext);

  console.log('hello');

  return (
    <>
      <h1>Register</h1>
      <Form
        validate={values => {
          const errors = {};
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'confirm password should match password';
          }
          return errors;
        }}
        fields={registerFields}
        initialValues={registerInitialValues}
        btnText="Register"
        onSubmit={register}
      />
      <Typography variant="body1" gutterBottom>
        Go to Login{' '}
        <Typography
          onClick={() => navigate('/', { replace: true })}
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
