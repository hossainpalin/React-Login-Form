import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Styles from '../../styles/modules/register.module.scss';
import Button from '../Button';
import Error from '../Error';
import Greeting from '../Greeting';
import Input from '../Input';
import Params from '../Params';
import RegisterSchema from '../RegisterSchema';
import Separator from '../Separator';
import SocialAuth from '../SocialAuth';
import UserToggle from '../UserToggle';

function Register() {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [type, setType] = useState(true);
  const [animation, setAnimation] = useState(false);

  // Formik initial values
  const formikInitialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    accept_tos: false,
  };

  // Formik submit handler
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
      document.getElementById('tos__id').checked = false;
    }, 1000);
  };

  // Formik form handler
  const {
    values, handleChange, handleSubmit, handleBlur, errors, touched, dirty, isSubmitting,
  } = useFormik({
    initialValues: formikInitialValues,
    validationSchema: RegisterSchema,
    onSubmit,
  });

  // Register form animation
  useEffect(() => {
    setAnimation(true);
  }, [animation]);

  return (
    <div className={`${Styles.register__container} ${animation ? Styles.animation : null}`}>
      {/* Greeting section here */}
      <Greeting heading="Create your account" subheading="👋 Let’s start your dream journey" />

      {/* Social login section here */}
      <SocialAuth />

      {/* Separator line section here */}
      <Separator />

      {/* User form section here */}
      <form onSubmit={handleSubmit}>
        {/* User first name section here */}
        <div className={Styles.user__input}>

          {/* First name section here */}
          <div className={Styles.first__input}>
            <label htmlFor="first_name">
              First Name
              <Input className={errors.first_name && touched.first_name && Styles.required__field} type="text" name="first_name" value={values.first_name} onChange={handleChange} onBlur={handleBlur} />
            </label>
            {errors.first_name && touched.first_name && (<Error>{errors.first_name}</Error>)}
          </div>

          {/* Last name section here */}
          <div className={Styles.last__input}>
            <label htmlFor="last_name">
              Last Name
              <Input className={errors.last_name && touched.last_name && Styles.required__field} type="text" name="last_name" value={values.last_name} onChange={handleChange} onBlur={handleBlur} />
            </label>
            {errors.last_name && touched.last_name && (<Error>{errors.last_name}</Error>)}
          </div>
        </div>

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
          <div className={Styles.first__input}>
            <label htmlFor="first_name">
              Password
              <Input className={errors.password && touched.password && Styles.required__field} type="password" name="password" autoComplete="new-password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
            </label>
            {errors.password && touched.password && (<Error>{errors.password}</Error>)}
          </div>

          {/* Confirm password section here */}
          <div className={Styles.last__input}>
            <label htmlFor="last_name">
              Confirm Password
              <Input className={errors.confirm_password && touched.confirm_password && Styles.required__field} type={type ? 'password' : 'text'} name="confirm_password" autoComplete="new-password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />

              {/* Password eye toggle section here */}
              <span className={Styles.eye__toggle} onClick={() => { setEyeToggle(!eyeToggle); setType(!type); }} aria-hidden="true">{eyeToggle ? <VscEyeClosed /> : <VscEye />}</span>
            </label>
            {errors.confirm_password && touched.confirm_password && (<Error>{errors.confirm_password}</Error>)}
          </div>
        </div>

        {/* Terms & condition section here */}
        <div className={`${Styles.terms__condition} flex flex-row-start`}>
          <Input className={Styles.checkbox} id="tos__id" type="checkbox" name="accept_tos" onChange={handleChange} onBlur={handleBlur} />
          <Params text="I accept" link="terms & conditions" />
          {errors.accept_tos && touched.accept_tos && (<Error>{errors.accept_tos}</Error>)}
        </div>

        {/* Submit button section here */}
        <div className={Styles.user__submit}>
          <Button className={Styles.submit__button} type="submit" Children="Register" disabled={!dirty || isSubmitting} />
        </div>
      </form>

      {/* Already have account section here */}
      <UserToggle params="Already have an account?" location="/auth/login" action="Sign-in Here" />
    </div>
  );
}
export default Register;
