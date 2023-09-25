import { useFormik } from 'formik';
import FormikSchema from '../components/FormikSchema';

function Formik() {
  // Formik initial values
  const formikInitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  // Formik form handler
  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: FormikSchema,
  });

  return formik;
}
export default Formik;
