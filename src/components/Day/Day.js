import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CalendarButtonConnected from '../Button/CalendarButtonConnected';
import EventFormConnected from '../Event/EventFormConnected';
import EventShowConnected from '../Event/EventShowConnected';
import styles from './Day.css';

/**
 * Display/manage interaction of a day
 * @class Day
 * @param {string} date
 * @param {number} value
 * @param {function} onSelected
 * @param {bool} isSelected
 * @param {string} monthId
 * @param {object} [event]
 */
class Day extends PureComponent {
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
  * @returns {node}
  */
  render () {
    const { value, isSelected, monthId, event } = this.props;
    const editMode = !!(event);

    return (
      <div className={styles.day}>
        {isSelected && !editMode &&
          <EventFormConnected
            onCancel={this.handleClick}
            monthId={monthId}
            day={value} />
        }

        {isSelected && editMode &&
          <EventShowConnected
            onCancel={this.handleClick}
            {...event} />
        }

        <CalendarButtonConnected
          onClick={this.handleClick}
          active={isSelected}
          event={event}
          editMode={editMode}>
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
  monthId: PropTypes.string.isRequired,
  event: PropTypes.shape({
    monthId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default Day;
