import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './CountDownField.css';

class CountDownField extends Component {
  updateValue = (value) => () => {
    const { min, max } = this.props;

    // if value are in our range
    if (value >= min && value <= max) {
      this.props.onChange(value);
    }
  }

  /**
  * Render
  */
  render () {
    const { value, min, max } = this.props;
    const leftChevronClassName = classnames(styles.button, {
      [styles.inactive]: value === min
    });
    const rightChevronClassName = classnames(styles.button, {
      [styles.inactive]: value === max
    });

    return (
      <span className={styles.countdown}>

        <button className={leftChevronClassName} type="button" onClick={this.updateValue(value - 1)}>
          <i className="material-icons">chevron_left</i>
        </button>

        <input className={styles.input} type="number" value={value} readOnly />

        <button className={rightChevronClassName} type="button" onClick={this.updateValue(value + 1)}>
          <i className="material-icons">chevron_right</i>
        </button>

      </span>
    );
  }
}

CountDownField.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number
};

CountDownField.defaultProps = {
  min: 2018,
  max: 2020
};

export default CountDownField;
