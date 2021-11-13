import FormikInput from '../../components/FormikInput';

export const registerationFields = [
  {
    name: 'name',
    label: 'Name',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'email',
    label: 'Email Address',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'confirmpassword',
    label: 'Confirm Password',
    type: 'password',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = {
  email: '',
  password: '',
  name: '',
  confirmpassword: '',
};
