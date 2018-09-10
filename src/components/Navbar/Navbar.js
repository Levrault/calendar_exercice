import React from 'react';
import styles from './Navbar.css';
import YearFormConnected from '../YearForm/YearFormConnected';

/**
 * Main navigation component
 * @returns {node}
 */
const Navbar = () => (
  <header className={styles.navbar}>
    <ul className={styles.list}>
      <li className={styles.item}>
        Calendar App exercice
      </li>
      <li className={styles.item}>
        <ul className={styles.sublist}>
          <li className={styles.item}>
            <YearFormConnected />
          </li>
        </ul>
      </li>
    </ul>
  </header>
);

export default Navbar;
