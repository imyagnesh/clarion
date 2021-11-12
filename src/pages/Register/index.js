import React from 'react';
import { LocaleContext } from '../../context/localeContext';

const Register = () => (
  <div>
    <h1>Register</h1>
    <LocaleContext.Consumer>
      {data => <div>{data.locale}</div>}
    </LocaleContext.Consumer>
  </div>
);

export default Register;
