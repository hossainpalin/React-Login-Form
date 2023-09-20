import React, { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Styles from '../../styles/modules/login.module.scss';
import AccountInfo from '../AccountInfo';
import Button from '../Button';
import Input from '../Input';
import Params from '../Params';
import Required from '../Required';
import Separator from '../Separator';
import SocialAuth from '../SocialAuth';

function Login() {
  const [eyeToggle, setEyeToggle] = useState(false);
  const [type, setType] = useState(true);
  const [email, setEmail] = useState('');
  const [emailRequired, setEmailRequired] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordRequired, setPasswordRequired] = useState(false);

  // Login form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      setEmailRequired(true);
    } else {
      setEmailRequired(false);
      setEmail('');
    }
    if (password === '') {
      setPasswordRequired(true);
    } else {
      setPasswordRequired(false);
      setPassword('');
    }
  };

  return (
    <div className={Styles.login__container}>
      <div className={Styles.greeting__text}>
        <h1 className={Styles.heading}>Welcome back</h1>
        <p className={Styles.subheading}>Enter the information you entered while registering</p>
      </div>

      {/* Social login section here */}
      <SocialAuth />

      {/* Separator line section here */}
      <Separator />

      {/* User submit section here */}
      <form onSubmit={handleSubmit}>
        {/* Email section here */}
        <div className={Styles.user__input}>
          <label htmlFor="email">
            Email address
            <Input type="email" className={emailRequired && Styles.field__required} value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setEmailRequired(false)} />
            {emailRequired && <Required>This field is required</Required>}
          </label>
        </div>

        {/* Password section here */}
        <div className={Styles.user__input}>
          <label htmlFor="password">
            Password
            <Input type={type ? 'password' : 'text'} className={passwordRequired && Styles.field__required} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setPasswordRequired(false)} />
            {passwordRequired && <Required>This field is required</Required>}
            <span className={Styles.eye__toggle} onClick={() => { setEyeToggle(!eyeToggle); setType(!type); }} aria-hidden="true">{eyeToggle ? <VscEyeClosed /> : <VscEye />}</span>
          </label>
        </div>

        {/* User security section here */}
        <div className={`${Styles.user__security} flex justify-space-between`}>
          {/* Remember password section here */}
          <div className={`${Styles.remember__me} flex flex-row-start`}>
            <Input type="checkbox" className={Styles.checkbox} />
            <Params>Remember me</Params>
          </div>

          {/* Forget password section here */}
          <div className={`${Styles.forgot__password} flex flex-row-end`}>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        {/* User submit section here */}
        <div className={Styles.user__submit}>
          <Button className={Styles.submit__button} type="submit" Children="Sign In" />
        </div>
      </form>

      {/* Don't account section here */}
      <AccountInfo />
    </div>
  );
}
export default Login;
