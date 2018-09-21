import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CalendarButton.css';

/**
 * Calendar button
 * @param {bool} active
 * @param {string} color
 * @param {node} children
 * @param {function} onClick
 * @returns {node}
 */
const CalendarButton = ({ active, color, children, onClick }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  const style = active ? { backgroundColor: color } : {};
  return (
    <button className={className} style={style} onClick={onClick} >
      {children}
    </button>
  );
};

CalendarButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func
};

CalendarButton.defaultProps = {
  active: false
};

export default CalendarButton;
