import { Button } from '@mui/material';
import { Field, Formik } from 'formik';
import React from 'react';

const Form = ({ fields, btnText, ...rest }) => (
  <Formik {...rest}>
    {({ handleSubmit }) => (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {fields.map(x => (
          <Field key={x.name} {...x} />
        ))}

        <Button type="submit" variant="contained">
          {btnText}
        </Button>
      </form>
    )}
  </Formik>
);

export default Form;
