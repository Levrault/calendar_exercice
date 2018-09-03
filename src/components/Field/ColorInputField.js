import React from 'react';
import PropTypes from 'prop-types';
import colors from '../Palette/ColorPalette';
import styles from './ColorInputField.css';

/**
 * @param {string} label
 */
const ColorInputField = ({ label, code, ...rest }) => {
  return (
    <div className={styles.container}>
      <input {...rest} className={styles.input} style={{ borderBottom: `2px solid ${code}` }} required />
      <label className={styles.label} htmlFor={name}>{label}</label>
    </div>
  );
};

ColorInputField.propTypes = {
  label: PropTypes.string.isRequired,
  code: PropTypes.string
};

ColorInputField.defaultProps = {
  code: colors[colors.length - 1]
};

export default ColorInputField;

