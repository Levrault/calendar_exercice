import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Button.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const Button = ({ active, children, ...rest }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  return (
    <button {...rest} className={className} >
      {children}
    </button>
  );
};

Button.propTypes = {
  active: PropTypes.bool
};

Button.defaultProps = {
  active: false
};

export default Button;
