import React from 'react';
import Styles from '../styles/modules/accountInfo.module.scss';

function AccountInfo() {
  return (
    <div className={Styles.account__info}>
      <p>
        Need an account? <a href='#'>Sign up now</a>
      </p>
    </div>
  );
}

export default AccountInfo;
