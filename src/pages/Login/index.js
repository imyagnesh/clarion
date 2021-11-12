import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './login.css';
import FormikInput from '../../components/FormikInput';
import Form from '../../components/Form';
import { loginFields, loginInitialValues } from './loginFields';
// import { LocaleContext } from '../../context/localeContext';

const Login = () => {
  const navigate = useNavigate();
  //   const { locale, setLocale } = useContext(LocaleContext);

  console.log('hello');

  return (
    <>
      <h1>Login</h1>
      <Form
        fields={loginFields}
        initialValues={loginInitialValues}
        btnText="Login"
        onSubmit={val => {
          console.log(val);
        }}
      />
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
    </>
  );
};

export default Login;

/* <div>
        <h2>{locale}</h2>
        <button
          type="button"
          onClick={() => {
            setLocale('es');
          }}
        >
          Change Locale
        </button>
      </div> */
/* <LocaleContext.Consumer>
        {data => {
          console.log('context rerender');
          return (
            <div>
              <h2>{data.locale}</h2>
              <button
                type="button"
                onClick={() => {
                  data.setLocale('es');
                }}
              >
                Change Locale
              </button>
            </div>
          );
        }}
      </LocaleContext.Consumer> */
