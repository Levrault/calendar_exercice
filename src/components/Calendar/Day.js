import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarButton from '../Button/CalendarButton';
import EventFormPopUp from '../Event/EventFormPopUp';
import styles from './Day.css';

class Day extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  /**
   * active day when clicked
   */
  handleClick = (event) => {
    this.setState({
      selected: !this.state.selected
    });
  }

  /**
  * Render
  */
  render () {
    const { selected } = this.state;
    const { value } = this.props;
    return (
      <div className={styles.day}>
        <EventFormPopUp active={selected} />
        <CalendarButton onClick={this.handleClick} active={selected}>
          {value}
        </CalendarButton>
      </div>
    );
  }
}

Day.propTypes = {
  value: PropTypes.number.isRequired
};

export default Day;
