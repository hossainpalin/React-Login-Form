import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from '../styles/modules/userToggle.module.scss';

function UserToggle({ params, location, action }) {
  return (
    <div className={Styles.account__info}>
      <p>
        {params}
        <NavLink to={location}>{action}</NavLink>
      </p>
    </div>
  );
}

UserToggle.propTypes = {
  params: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default UserToggle;
