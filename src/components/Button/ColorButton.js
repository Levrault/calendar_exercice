import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ColorButton.css';

/**
 * Color button
 * @param {bool} [active=false]
 * @returns {node}
 */
const ColorButton = ({ active, ...rest }) => (
  <button
    type="button"
    className={classnames(styles.container, { [styles.active]: active })}
    style={{ backgroundColor: rest.value }}
    {...rest}
  />
);

ColorButton.propTypes = {
  active: PropTypes.bool
};

ColorButton.defaultProps = {
  active: false
};

export default ColorButton;
