import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CalendarButton.css';

/**
 * Calendar button
 * @param {bool} [active=false]
 * @param {string} [color]
 * @param {string} [fontColor]
 * @param {node} children
 * @param {function} onClick
 * @returns {node}
 */
const CalendarButton = ({ active, color, fontColor, children, onClick }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  const style = active ? { backgroundColor: color, color: fontColor } : {};
  return (
    <button className={className} style={style} onClick={onClick} >
      {children}
    </button>
  );
};

CalendarButton.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  onClick: PropTypes.func
};

CalendarButton.defaultProps = {
  active: false
};

export default CalendarButton;
