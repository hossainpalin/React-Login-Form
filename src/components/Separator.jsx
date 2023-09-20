import React from 'react';
import Styles from '../styles/modules/separator.module.scss';

function Separator() {
  return (
    <div className={`${Styles.separator} flex flex-row-center`}>
      <span className={Styles.separator__text}>Or continue with</span>
      <span className={Styles.separator__line} />
    </div>
  );
}
export default Separator;
