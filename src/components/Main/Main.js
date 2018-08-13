import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

/**
 * Main div container
 * @param {children} children
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
