import { number } from 'prop-types';
import FormikInput from '../../components/FormikInput';

export const productFields = [
  {
    name: 'title',
    label: 'Title',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'price',
    label: 'Price',
    type: number,
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'description',
    label: 'Description',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'category',
    label: 'Category',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'image',
    label: 'Image',
    component: FormikInput,
    value: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];

export const productInitialValues = {
  email: '',
  password: '',
  name: '',
  confirmpassword: '',
};
