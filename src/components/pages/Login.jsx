import React, { useEffect, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Styles from '../../styles/modules/login.module.scss';
import Button from '../Button';
import Greeting from '../Greeting';
import Input from '../Input';
import Params from '../Params';
import Separator from '../Separator';
import SocialAuth from '../SocialAuth';
import UserToggle from '../UserToggle';

function Login() {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [type, setType] = useState(true);
  const [animation, setAnimation] = useState(false);

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
      <form>
        {/* Email section here */}
        <div className={Styles.user__input}>
          <label htmlFor="email">
            Email Address
            <Input type="text" name="email" className={null && Styles.required__field} />
          </label>
        </div>

        {/* Password section here */}
        <div className={Styles.user__input}>
          <label htmlFor="password">
            Password
            <Input type={type ? 'password' : 'text'} name="password" className={null && Styles.required__field} autoComplete="new-password" />
            <span className={Styles.eye__toggle} onClick={() => { setEyeToggle(!eyeToggle); setType(!type); }} aria-hidden="true">{eyeToggle ? <VscEyeClosed /> : <VscEye />}</span>
          </label>
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
          <Button className={Styles.submit__button} type="submit" Children="Sign In" />
        </div>
      </form>

      {/* Don't have account section here */}
      <UserToggle params="Need an account?" location="/auth/register" action="Register Here" />
    </div>
  );
}
export default Login;
