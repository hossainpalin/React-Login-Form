import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/params.module.scss';

function Params({ children }) {
  return (
    <p className={Styles.params}>{ children }</p>
  );
}

Params.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Params;
