import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/params.module.scss';

function Params({ text, link }) {
  return (
    <p className={Styles.params}>
      <span>{text}</span>
      <span><a href="#">{link}</a></span>
    </p>
  );
}

Params.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Params.defaultProps = {
  link: null,
};

export default Params;
