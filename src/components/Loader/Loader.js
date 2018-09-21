import React from 'react';
import classnames from 'classnames';
import styles from './Loader.css';

/**
 * Loader
 * @param {bool} active
 * @returns {node}
 */
const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.overlay} />
    <i className={classnames('material-icons', styles.icon)}>autorenew</i>
  </div>
);


export default Loader;
