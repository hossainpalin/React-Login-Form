import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Styles from '../styles/modules/socialAuth.module.scss';
import Button from './Button';

function SocialAuth() {
  return (
    <div className={Styles.social__auth__container}>
      <h3 className={Styles.auth__heading}>Sign in with</h3>
      <div className={Styles.auth__button}>
        <a href="#">
          <Button Children={<FaGoogle />} />
        </a>

        <a href="#">
          <Button Children={<FaFacebook />} />
        </a>

        <a href="#">
          <Button Children={<FaTwitter />} />
        </a>
      </div>
    </div>
  );
}
export default SocialAuth;
