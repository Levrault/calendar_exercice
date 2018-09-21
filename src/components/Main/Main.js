import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

/**
 * Manage router children loading
 * @param {children} children
 * @returns {node}
 */
const Main = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
);

Main.proptypes = {
  children: PropTypes.node.isRequired
};

export default Main;
