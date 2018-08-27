import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CalendarButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {string} color
 * @param {node} children
 * @returns {node}
 */
const CalendarButton = ({ active, color, children, ...rest }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  const style = active ? { backgroundColor: color } : {};
  return (
    <button {...rest} className={className} style={style} >
      {children}
    </button>
  );
};

CalendarButton.propTypes = {
  active: PropTypes.bool,
  hasEvent: PropTypes.bool,
  color: PropTypes.string
};

CalendarButton.defaultProps = {
  active: false,
  hasEvent: false
};

export default CalendarButton;
