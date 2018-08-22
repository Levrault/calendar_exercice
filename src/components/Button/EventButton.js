import React from 'react';
import styles from './EventButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const EventButton = ({ children, ...rest }) => (
  <button {...rest} className={styles.button} >
    {children}
  </button>
);

export default EventButton;
