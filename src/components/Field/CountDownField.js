import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CountDownField.css';

class CountDownField extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
  }

  /**
   * increment value
   */
  incrementValue = (event) => {
    this.setState({
      value: (this.state.value + 1)
    });
  }

  /**
   * decrement value
   */
  decrementValue = (event) => {
    this.setState({
      value: (this.state.value - 1)
    });
  }

  /**
  * Render
  */
  render () {
    const { value } = this.state;
    return (
      <span className={styles.countdown}>

        <button className={styles.button} onClick={this.decrementValue}>
          <i className="material-icons">chevron_left</i>
        </button>

        <input className={styles.input} type="number" value={value} readOnly />

        <button className={styles.button} onClick={this.incrementValue}>
          <i className="material-icons">chevron_right</i>
        </button>

      </span>
    );
  }
}

CountDownField.propTypes = {
  defaultValue: PropTypes.number
};

CountDownField.defaultProps = {
  defaultValue: 2018
};

export default CountDownField;
