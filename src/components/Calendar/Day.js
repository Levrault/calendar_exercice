import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CalendarButton from '../Button/CalendarButton';
import EventFormPopUp from '../Event/EventFormPopUp';
import styles from './Day.css';

class Day extends PureComponent {
  /**
   * active day when clicked
   */
  handleClick = (event) => {
    const { onSelected, date } = this.props;
    onSelected(date);
  }

  /**
  * Render
  */
  render () {
    const { value, isSelected } = this.props;
    return (
      <div className={styles.day}>
        <EventFormPopUp active={isSelected} />
        <CalendarButton onClick={this.handleClick} active={isSelected}>
          {value}
        </CalendarButton>
      </div>
    );
  }
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default Day;
