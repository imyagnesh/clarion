import FormikInput from '../../components/FormikInput';
import FormikSelect from '../../components/FormikSelect';

export const addProductsFields = [
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
    type: 'number',
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
    component: FormikSelect,
    options: [
      { text: `Men's clothing`, value: `men's clothing` },
      { text: `Women's clothing`, value: `women's clothing` },
      { text: `Electronics`, value: `electronics` },
    ],

    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'image',
    label: 'Image URL',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const addProductsInitialValues = {
  id: '',
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 4.7,
    count: 500,
  },
};
