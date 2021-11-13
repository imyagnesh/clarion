import React from 'react';
import Form from '../../components/Form';
import {
  addProductsFields,
  addProductsInitialValues,
} from './addProductFields';
import './addProduct.css';

const AddProduct = ({ addProduct }) => (
  <div className="add-product-container">
    <h1>Add Product</h1>
    <Form
      fields={addProductsFields}
      initialValues={addProductsInitialValues}
      btnText="Add Product"
      onSubmit={addProduct}
    />
  </div>
);

export default AddProduct;
