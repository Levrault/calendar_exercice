import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorButton from '../Button/ColorButton';
import colors from './colors-constant';
import styles from './ColorPalette.css';

/**
 * Show color palette, change calender selected date's color
 */
class ColorPalette extends PureComponent {
  /**
  * Render
  */
  render () {
    const { active, value, onClick } = this.props;
    const containerClassName = classnames(styles.colorPalette, {
      [styles.active]: active
    });
    return (
      <ul className={containerClassName}>
        {
          colors.map(({ code, name }) => (
            <li key={name} className={styles.color} >
              <ColorButton
                value={code}
                active={code === value}
                onClick={onClick}
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
