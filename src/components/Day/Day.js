import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CalendarButton from '../Button/CalendarButton';
import EventFormConnected from '../Event/EventFormConnected';
import styles from './Day.css';

/**
 * Show a day
 */
class Day extends PureComponent {
  /**
   * active/inactive day when clicked
   */
  handleClick = () => {
    const { onSelected, date, isSelected } = this.props;
    onSelected(isSelected ? '' : date);
  }

  /**
  * Render
  */
  render () {
    const { value, isSelected } = this.props;
    return (
      <div className={styles.day}>
        <EventFormConnected active={isSelected} />
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
