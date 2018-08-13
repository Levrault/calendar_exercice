import React from 'react';
import Link from '../Link/Link';
import styles from './Navbar.css';

/**
 * Main navigation component
 * @returns {node}
 */
const Navbar = () => (
  <header className={styles.navbar}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
);

export default Navbar;
