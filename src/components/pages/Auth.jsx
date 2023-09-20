import React from 'react';
import Styles from '../../styles/modules/auth.module.scss';
import Illustration from '../Illustration';
import Login from './Login';
// import Register from './Register';

function Auth() {
  return (
    <div className={`${Styles.auth__wrapper} flex flex-row-center`}>
      <div className={`${Styles.auth__container}`}>
        {/* User authentication section here */}
        <div className={`${Styles.auth__user} flex flex-row-center`}>
          <Login />
          {/* <Register /> */}
        </div>

        {/* Illustration section here */}
        <div className={Styles.auth__illustration}>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
export default Auth;
