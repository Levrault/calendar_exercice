import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarButtonConnected from '../Button/CalendarButtonConnected';
import EventFormConnected from '../Event/EventFormConnected';
import styles from './Day.css';

/**
 * Show a day
 */
class Day extends Component {
  /**
   * @param {object} nextProps
   * @returns {bool}
   */
  shouldComponentUpdate (nextProps) {
    return nextProps.isSelected !== this.props.isSelected;
  }

  /**
   * active/inactive day when clicked
   */
  handleClick = () => {
    const { onSelected, date, selectedDate, isSelected } = this.props;
    if (selectedDate !== date) {
      onSelected(date);
    } else if (isSelected) {
      onSelected('');
    }
  }

  /**
  * Render
  */
  render () {
    const { value, isSelected, monthId } = this.props;
    return (
      <div className={styles.day}>
        {isSelected &&
          <EventFormConnected onCancel={this.handleClick} monthId={monthId} day={value} />
        }
        <CalendarButtonConnected onClick={this.handleClick} active={isSelected}>
          {value}
        </CalendarButtonConnected>
      </div>
    );
  }
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onSelected: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  monthId: PropTypes.string.isRequired
};

export default Day;
