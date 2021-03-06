import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorButton from '../Button/ColorButton';
import { colors } from './colors-constant';
import styles from './ColorPalette.css';

/**
 * Show color palette, change calender selected date's color
 * @class ColorPalette
 * @param {bool} active
 * @param {string} value
 * @param {function} onClick
 */
class ColorPalette extends PureComponent {
  /**
  * Render
  * @returns {node}
  */
  render () {
    const { active, value, onClick } = this.props;
    const containerClassName = classnames(styles.colorPalette, {
      [styles.active]: active
    });
    return (
      <ul className={containerClassName}>
        {
          colors.map(({ code, font, name }) => (
            <li key={name} className={styles.color} >
              <ColorButton
                value={code}
                active={code === value}
                onClick={onClick(code, font)}
              />
            </li>
          ))
        }
      </ul>
    );
  }
}

ColorPalette.propTypes = {
  active: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

ColorPalette.defaultProps = {
  active: false
};

export default ColorPalette;
