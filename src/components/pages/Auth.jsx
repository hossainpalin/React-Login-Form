import React from 'react';
import { Outlet } from 'react-router-dom';
import Styles from '../../styles/modules/auth.module.scss';
import Illustration from '../Illustration';

function Auth() {
  return (
    <div className={Styles.auth__wrapper}>
      <div className={`${Styles.auth__container}`}>
        {/* User authentication section here */}
        <div className={`${Styles.auth__user} flex flex-row-center`}>
          <Outlet />
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
