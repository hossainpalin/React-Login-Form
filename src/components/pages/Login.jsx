import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Styles from '../../styles/modules/login.module.scss';
import Button from '../Button';
import Error from '../Error';
import Greeting from '../Greeting';
import Input from '../Input';
import LoginSchema from '../LoginSchema';
import Params from '../Params';
import Separator from '../Separator';
import SocialAuth from '../SocialAuth';
import UserToggle from '../UserToggle';

function Login() {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [type, setType] = useState(true);
  const [animation, setAnimation] = useState(false);

  // Formik initial values
  const formikInitialValues = {
    email: '',
    password: '',
  };

  // Formik submit handler
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };

  // Formik form handler
  const {
    values, handleChange, handleSubmit, handleBlur, errors, touched, dirty, isSubmitting,
  } = useFormik({
    initialValues: formikInitialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });

  // Login form animation
  useEffect(() => {
    setAnimation(true);
  }, [animation]);

  return (
    <div className={`${Styles.login__container} ${animation ? Styles.animation : null}`}>
      {/* Greeting section here */}
      <Greeting heading="Welcome back👋" subheading="Enter the information you entered while registering" />

      {/* Social login section here */}
      <SocialAuth />

      {/* Separator line section here */}
      <Separator />

      {/* User form section here */}
      <form onSubmit={handleSubmit}>
        {/* Email section here */}
        <div className={Styles.user__input}>
          <label htmlFor="email">
            Email Address
            <Input className={errors.email && touched.email && Styles.required__field} type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          </label>
          {errors.email && touched.email && (<Error>{errors.email}</Error>)}
        </div>

        {/* Password section here */}
        <div className={Styles.user__input}>
          <label htmlFor="password">
            Password
            <Input className={errors.password && touched.password && Styles.required__field} type={type ? 'password' : 'text'} name="password" autoComplete="new-password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            <span className={Styles.eye__toggle} onClick={() => { setEyeToggle(!eyeToggle); setType(!type); }} aria-hidden="true">{eyeToggle ? <VscEyeClosed /> : <VscEye />}</span>
          </label>
          {errors.password && touched.password && (<Error>{errors.password}</Error>)}
        </div>

        {/* Security section here */}
        <div className={`${Styles.user__security} flex justify-space-between`}>
          {/* Remember password section here */}
          <div className={`${Styles.remember__me} flex flex-row-start`}>
            <Input type="checkbox" className={Styles.checkbox} />
            <Params text="Remember me" />
          </div>

          {/* Forget password section here */}
          <div className={`${Styles.forgot__password} flex flex-row-end`}>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        {/* Submit button section here */}
        <div className={Styles.user__submit}>
          <Button className={Styles.submit__button} type="submit" Children="Sign In" disabled={!dirty || isSubmitting} />
        </div>
      </form>

      {/* Don't have account section here */}
      <UserToggle params="Need an account?" location="/react-login-form/register" action="Register Here" />
    </div>
  );
}
export default Login;
