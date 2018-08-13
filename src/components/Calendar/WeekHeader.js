import React from 'react';
import styles from './WeekHeader.css';

const WeekHeader = () => {
  return (
    <ul className={styles.header}>
      <li className={styles.item}>S</li>
      <li className={styles.item}>M</li>
      <li className={styles.item}>T</li>
      <li className={styles.item}>W</li>
      <li className={styles.item}>T</li>
      <li className={styles.item}>F</li>
      <li className={styles.item}>S</li>
    </ul>
  );
};

export default WeekHeader;
