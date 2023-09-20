import React from 'react';
import IllustrationImage from '../assets/images/illustration.jpg';
import Styles from '../styles/modules/illustration.module.scss';

function Illustration() {
  return (
    <div className={Styles.illustration__container}>
      <img src={IllustrationImage} alt="Illustration" />
    </div>
  );
}
export default Illustration;
