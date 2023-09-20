import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/input.module.scss';

function Input({ className, type, ...rest }) {
  return (
    <input className={`${Styles.input} ${className}`} type={type} {...rest} />
  );
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rest: PropTypes.node.isRequired,
};

export default Input;
