import * as Yup from 'yup';

const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\?*])(?=.{8,})/, 'Enter strong password')
    .required('This field is required'),
});

export default LoginSchema;
