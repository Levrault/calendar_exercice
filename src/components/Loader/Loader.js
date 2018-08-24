import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Loader.css';

/**
 * Loader
 * @param {bool} active
 */
const Loader = ({ active }) => {
  if (!active) return null;
  return (
    <div className={styles.loader}>
      <div className={styles.overlay} />
      <i className={classnames('material-icons', styles.icon)}>autorenew</i>
    </div>
  );
};

Loader.propTypes = {
  active: PropTypes.bool.isRequired
};

export default Loader;
