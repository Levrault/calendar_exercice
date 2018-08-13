import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import styles from './InputField.css';

/**
 * @param {string} label
 */
const InputField = ({ label, ...rest }) => {
  return (
    <div className={styles.inputField}>
      <Field {...rest} className={styles.input} />
      <label className={styles.label} htmlFor={name}>{label}</label>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired
};

export default InputField;
