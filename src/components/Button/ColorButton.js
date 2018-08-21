import React from 'react';
import styles from './ColorButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const ColorButton = ({ children, ...rest }) => (
  <button {...rest} className={styles.button} >
    {children}
  </button>
);

export default ColorButton;
