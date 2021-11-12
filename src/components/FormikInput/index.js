import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React from 'react';

const FormikInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => (
  <FormControl error={touched[field.name] && !!errors[field.name]}>
    <InputLabel htmlFor="txt-email">{label}</InputLabel>
    <Input {...field} {...props} />
    {touched[field.name] && !!errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

export default FormikInput;
