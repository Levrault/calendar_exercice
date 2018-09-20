import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Link.css';

/**
 * Generate default link
 * @param {object} props
 */
const Link = (props) => (
  <NavLink {...props} exact activeClassName={styles.active} />
);

Link.propstype = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

Link.defaultProps = {
  className: styles.link
};

export default Link;
