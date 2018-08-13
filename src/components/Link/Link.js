import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.css';

/**
 * Generate default link
 * @param {object} props
 */
const Link = (props) => (
  <RouterLink {...props} />
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
