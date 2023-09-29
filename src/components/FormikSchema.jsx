import * as Yup from 'yup';

const FormikSchema = Yup.object({
  first_name: Yup.string()
    .min(5, 'At least 5 characters')
    .max(20, 'Max 20 characters')
    .required('This field is required'),
  last_name: Yup.string()
    .min(5, 'At least 5 characters')
    .max(20, 'Max 20 characters')
    .required('This field is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\?*])(?=.{8,})/, 'Enter strong password')
    .required('This field is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password not matched')
    .required('This field is required'),
});

export default FormikSchema;
