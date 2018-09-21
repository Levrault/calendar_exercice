import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './EventButton.css';

/**
 * Event button
 * @param {bool} active
 * @param {node} children
 * @returns {node}
 */
const EventButton = ({ active, children, ...rest }) => {
  const className = classnames(styles.button, {
    [styles.active]: active
  });
  return (
    <button {...rest} className={className} >
      {children}
    </button>
  );
};

EventButton.propTypes = {
  active: PropTypes.bool
};

EventButton.defaultProps = {
  active: false
};

export default EventButton;
