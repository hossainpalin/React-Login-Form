import * as Yup from 'yup';

const FormikSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Name must be at least 5 characters')
    .max(25, 'Name must be less than 25 characters')
    .required('Name field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address field is required'),
  password: Yup.string()
    .min(8, 'Password must be strong and at least 8 characters')
    .required('Password field is required'),
});

export default FormikSchema;
