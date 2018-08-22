import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CalendarButton.css';

/**
 * Primary button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const CalendarButton = ({ active, children, ...rest }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  return (
    <button {...rest} className={className} >
      {children}
    </button>
  );
};

CalendarButton.propTypes = {
  active: PropTypes.bool
};

CalendarButton.defaultProps = {
  active: false
};

export default CalendarButton;
