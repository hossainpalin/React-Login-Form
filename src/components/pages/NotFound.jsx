import React from 'react';
import Styles from '../../styles/modules/notFound.module.scss';

function NotFound() {
  return (
    <div className={Styles.not__found__container}>
      <h1>404</h1>
      <p>There's nothing here!</p>
      <span>Sorry, the page you were looking for in this site does not exit</span>
    </div>
  );
}
export default NotFound;
