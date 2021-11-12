import React from 'react';
import { LocaleContext } from '../../context/localeContext';
import { registerationFields, registerInitialValues } from './registerationFields';
import Form from '../../components/Form';


const Register = () => {
 
  return (
    <>
      <h1>Login</h1>
      <Form
        fields={registerationFields}
        initialValues={registerInitialValues}
        btnText="Login"
        onSubmit={val => {
          console.log(val);
        }}
      />
    </>
  );
};

export default Register;
