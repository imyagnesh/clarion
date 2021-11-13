import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';

const FormikSelect = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  options,
  ...props
}) => (
  <FormControl error={touched[field.name] && !!errors[field.name]}>
    <InputLabel htmlFor="txt-email">{label}</InputLabel>
    <Select {...field} {...props}>
      {options.map(x => (
        <MenuItem key={x.value} value={x.value}>
          {x.text}
        </MenuItem>
      ))}
    </Select>
    {touched[field.name] && !!errors[field.name] && (
      <FormHelperText>{errors[field.name]}</FormHelperText>
    )}
  </FormControl>
);

export default FormikSelect;
