import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/greeting.module.scss';

function Greeting({ heading, subheading }) {
  return (
    <div className={Styles.greeting}>
      <h1 className={Styles.heading}>{heading}</h1>
      <p className={Styles.subheading}>{subheading}</p>
    </div>
  );
}

Greeting.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
};

export default Greeting;
