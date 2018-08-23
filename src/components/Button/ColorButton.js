import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './ColorButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const ColorButton = ({ active, children, ...rest }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  return (
    <button {...rest} className={className} >
      {children}
    </button>
  );
};

ColorButton.propTypes = {
  active: PropTypes.bool
};

ColorButton.defaultProps = {
  active: false
};

export default ColorButton;
