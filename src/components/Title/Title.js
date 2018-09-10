import React from 'react';
import styles from './Title.css';

/**
 * Title component
 * @param {object} props
 * @returns {node}
 */
const Title = (props) => (
  <h1 className={styles.title}>
    {props.children}
  </h1>
);

export default Title;
