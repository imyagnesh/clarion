import FormikInput from '../../components/FormikInput';

export const loginFields = [
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
];

export const loginInitialValues = {
  email: '',
  password: '',
};
