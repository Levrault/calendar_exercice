import React from 'react';
import styles from './Navbar.css';
import YearFormConnected from '../YearBoxForm/YearFormConnected';
import Total from '../Total/Total';

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
          <li className={styles.item}>
            <Total value={0} />
          </li>
        </ul>
      </li>
    </ul>
  </header>
);

export default Navbar;
