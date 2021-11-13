import FormikInput from '../../components/FormikInput';

export const registerFields = [
  {
    name: 'firstname',
    label: 'First Name',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'lastname',
    label: 'Last Name',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    component: FormikInput,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value <= 18 || value > 100) {
        return 'Age should be between 18 and 100';
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
    name: 'confirmPassword',
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
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};
