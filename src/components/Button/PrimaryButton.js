import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './PrimaryButton.css';

/**
 * Primary button
 * @param {bool} animated
 */
const PrimaryButton = ({ animated, ...rest }) => {
  const className = classnames(styles.primaryButton, {
    [styles.animated]: animated
  });

  return (
    <button {...rest} className={className} >
      {rest.children}
    </button>
  );
};

PrimaryButton.propTypes = {
  animated: PropTypes.bool
};

PrimaryButton.defaultProps = {
  animated: true
};

export default PrimaryButton;
