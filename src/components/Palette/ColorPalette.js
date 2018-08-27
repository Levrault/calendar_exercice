import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ColorRadioButton from '../Button/ColorButton';
import colors from './colors-constant';
import styles from './ColorPalette.css';

/**
 * Show color palette, change calender selected date's color
 */
class ColorPalette extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      value: colors[colors.length - 1]
    };
  }

  /**
   * @params {string} value
   * @returns {function}
   */
  handleClick = value => event => {
    this.props.input.onChange(event);
    this.setState({
      value
    });
  }

  /**
  * Render
  */
  render () {
    const { active } = this.props;
    const containerClassName = classnames(styles.colorPalette, {
      [styles.active]: active
    });
    return (
      <ul className={containerClassName}>
        {
          colors.map(({ code, name }) => (
            <li key={name} className={styles.color} >
              <ColorRadioButton
                id={code}
                code={code}
                value={code}
                active={code === this.state.value}
                onClick={this.handleClick(code)}
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
  input: PropTypes.object.isRequired
};

ColorPalette.defaultProps = {
  active: false
};

export default ColorPalette;
