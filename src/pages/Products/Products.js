import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { productFields, productInitialValues } from './productFields';
import Form from '../../components/Form';


const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Add Products</h1>
      <Form
        fields={productFields}
        initialValues={productInitialValues}
        btnText="SUBMIT"
        onSubmit={val => {
          console.log(val);
        }}
      />
    </>
  );
};

export default Products;
