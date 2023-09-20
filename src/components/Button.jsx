import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/button.module.scss';

function Button({
  Children, className, type, ...rest
}) {
  return (
    <button
      className={`${Styles.button} ${className} flex flex-row-center`}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      { Children }
    </button>
  );
}

Button.propTypes = {
  Children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rest: PropTypes.node.isRequired,
};

export default Button;
