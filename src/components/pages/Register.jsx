import React, { useEffect, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Styles from '../../styles/modules/register.module.scss';
import Button from '../Button';
import Greeting from '../Greeting';
import Input from '../Input';
import Params from '../Params';
import Separator from '../Separator';
import SocialAuth from '../SocialAuth';
import UserToggle from '../UserToggle';

function Register() {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [type, setType] = useState(true);
  const [animation, setAnimation] = useState(false);

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
      <form>
        {/* User first name section here */}
        <div className={Styles.user__input}>

          {/* First name section here */}
          <div className={Styles.first__input}>
            <label htmlFor="first_name">
              First Name
              <Input type="text" name="first_name" className={null && Styles.field__required} />
            </label>
          </div>

          {/* Last name section here */}
          <div className={Styles.last__input}>
            <label htmlFor="last_name">
              Last Name
              <Input type="text" name="last_name" className={null && Styles.field__required} />
            </label>
          </div>
        </div>

        {/* Email section here */}
        <div className={Styles.user__input}>
          <label htmlFor="email">
            Email Address
            <Input type="text" name="email" className={null && Styles.field__required} />
          </label>
        </div>

        {/* Password section here */}
        <div className={Styles.user__input}>
          <div className={Styles.first__input}>
            <label htmlFor="first_name">
              Password
              <Input type="password" name="first_name" className={null && Styles.field__required} autoComplete="new-password" />
            </label>
          </div>

          {/* Confirm password section here */}
          <div className={Styles.last__input}>
            <label htmlFor="last_name">
              Confirm Password
              <Input type={type ? 'password' : 'text'} name="last_name" className={null && Styles.field__required} autoComplete="new-password" />

              {/* Password eye toggle section here */}
              <span className={Styles.eye__toggle} onClick={() => { setEyeToggle(!eyeToggle); setType(!type); }} aria-hidden="true">{eyeToggle ? <VscEyeClosed /> : <VscEye />}</span>
            </label>
          </div>
        </div>

        {/* Terms & condition section here */}
        <div className={`${Styles.terms__condition} flex flex-row-start`}>
          <Input type="checkbox" className={Styles.checkbox} />
          <Params text="I accept" link="terms & conditions" />
        </div>

        {/* Submit button section here */}
        <div className={Styles.user__submit}>
          <Button className={Styles.submit__button} type="submit" Children="Register" />
        </div>
      </form>

      {/* Already have account section here */}
      <UserToggle params="Already have an account?" location="/auth/login" action="Sign-in Here" />
    </div>
  );
}
export default Register;
