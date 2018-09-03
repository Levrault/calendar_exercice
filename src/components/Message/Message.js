import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Message.css';

/**
 * Message
 * @param {string} type
 * @returns {node}
 */
const Message = ({ type, children }) => {
  const hasSuccess = type === 'success';
  const hasError = type === 'error';
  const containerClassname = classnames(styles.container, {
    [styles.success]: hasSuccess,
    [styles.error]: hasError
  });
  const iconClassname = classnames('material-icons', styles.icon);
  return (
    <div className={containerClassname}>
      {hasSuccess && <i className={iconClassname}>check_circle</i> }
      {hasError && <i className={iconClassname}>error</i> }
      {children}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string
};

Message.defaultProps = {
  type: ''
};

export default Message;
