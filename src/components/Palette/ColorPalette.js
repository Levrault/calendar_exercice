import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorButton from '../Button/ColorButton';
import styles from './ColorPalette.css';
import colors from './colors-constant';


/**
 * Show color palette, change calender selected date's color
 * @param {bool} active
 */
const ColorPalette = ({ active }) => {
  const containerClassName = classnames(styles.colorPalette, {
    [styles.active]: active
  });
  return (
    <ul className={containerClassName}>
      {
        colors.map(({ code, name }) => (
          <li key={name} className={styles.color} >
            <ColorButton type="button" style={{ backgroundColor: code }} />
          </li>
        ))
      }
    </ul>
  );
};

ColorPalette.propTypes = {
  active: PropTypes.bool
};

ColorPalette.defaultProps = {
  active: false
};

export default ColorPalette;
