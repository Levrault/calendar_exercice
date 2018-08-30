import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ColorButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const ColorButton = ({ active, code, ...rest }) => (
  <button
    type="button"
    className={classnames(styles.container, { [styles.active]: active })}
    style={{ backgroundColor: code }}
    {...rest}
  />
);

ColorButton.propTypes = {
  active: PropTypes.bool,
  code: PropTypes.string.isRequired
};

export default ColorButton;
