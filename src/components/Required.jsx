import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/required.module.scss';

function Required({ children }) {
  return (
    <small className={Styles.required}>{ children}</small>
  );
}

Required.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Required;
