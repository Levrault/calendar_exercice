import React from 'react';
import PropTypes from 'prop-types';
import styles from './Total.css';

const Total = ({ value }) => (
  <span className={styles.total}>
    {value}
  </span>
);

Total.propTypes = {
  value: PropTypes.number.isRequired
};

export default Total;
