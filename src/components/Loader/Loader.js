import React from 'react';
import classnames from 'classnames';
import styles from './Loader.css';

/**
 * Loader
 * @param {bool} active
 */
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.overlay} />
      <i className={classnames('material-icons', styles.icon)}>autorenew</i>
    </div>
  );
};

export default Loader;
