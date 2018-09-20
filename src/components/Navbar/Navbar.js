import React from 'react';
import styles from './Navbar.css';
import YearFormConnected from '../YearForm/YearFormConnected';
import Link from '../Link/Link';

/**
 * Main navigation component
 * Use react-router link to navigate between pages
 * @returns {node}
 */
const Navbar = () => (
  <header className={styles.navbar}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <ul className={styles.sublist}>
          <li className={styles.item}>
            <Link title="calendar" to="/">Calendar</Link>
          </li>
          <li className={styles.item}>
            <Link title="about" to="/about">About</Link>
          </li>
        </ul>
      </li>
      <li className={styles.item}>
        <YearFormConnected />
      </li>
    </ul>
  </header>
);

export default Navbar;
