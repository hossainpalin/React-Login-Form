import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/error.module.scss';

function Error({ children }) {
  return (
    <small className={Styles.error}>{ children}</small>
  );
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Error;
