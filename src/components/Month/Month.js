import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeekHeader from '../Week/WeekHeader';
import DayConnected from '../Day/DayConnected';
import styles from './Month.css';

/**
 * Display a month
 * @class Month
 * @param {number} numberOfDays
 * @param {number} firstDayIndex e.g. 2 will begin a Monday and 1 a sunday
 * @param {number} [currentDay=0]
 * @param {number} chronology
 * @param {string} name
 * @param {string} id
 * @param {array} [events=[]]
 */
class Month extends Component {
  /**
   * Return the good event
   * @param {array} events
   * @param {string} day
   * @returns {bool}
   */
  static getEvent (events, day) {
    if (!Array.isArray(events)) return;
    return events.find(event => event.day === day);
  }

  /**
   * Update only when new event or first day change
   * @param {object} nextProps
   * @returns {bool}
   */
  shouldComponentUpdate (nextProps) {
    let shouldUpdate = false;
    if (Array.isArray(nextProps.events)) {
      shouldUpdate = nextProps.events.length !== this.props.events.length;
    }

    if (nextProps.firstDayIndex !== this.props.firstDayIndex) {
      shouldUpdate = true;
    }

    return shouldUpdate;
  }

  /**
   * Create a formated array to put the good day in
   * the good week
   * @returns {array} formated week
   */
  computeWeeks = () => {
    const { numberOfDays, firstDayIndex } = this.props;
    let weeks = [];
    let week = [];
    let day = 1;
    const length = numberOfDays + firstDayIndex;
    for (let index = 1; index < length; index++) {
      // move the first date to math the good day
      // e.g. if begin on wenesday, we will have a decay of 4
      if (index < firstDayIndex) {
        week.push(0);
      } else {
        week.push(day);
        day++;
      }
      if (index % 7 === 0) {
        weeks.push(week);
        week = [];
      }
    }

    // complete the rest of the week with dumb value
    const rest = 7 - week.length;
    for (let index = 0; index < rest; index++) {
      week.push(0);
    }

    // add last week
    weeks.push(week);

    return weeks;
  }

  /**
  * @returns {node}
  */
  render () {
    const weeks = this.computeWeeks();
    const { chronology, name, id, events } = this.props;
    return (
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <div>
          <WeekHeader />
          {
            weeks.map((week, index) => (
              <ul key={`${name}-week${index}`} className={styles.week}>
                {
                  week.map((day, index) => {
                    if (day === 0) return <li key={`${name}-empty-${index}`} className={styles.day} />;
                    return (
                      <li key={`${name}-day${day}`} className={styles.day}>
                        <DayConnected
                          value={day}
                          date={`${chronology}-${day}`}
                          monthId={id}
                          event={this.constructor.getEvent(events, day)}
                        />
                      </li>
                    );
                  })
                }
              </ul>
            ))
          }
        </div>
      </div>
    );
  }
}

Month.propTypes = {
  numberOfDays: PropTypes.number.isRequired,
  firstDayIndex: PropTypes.number.isRequired,
  currentDay: PropTypes.number,
  chronology: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    monthId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))
};

Month.defaultProps = {
  currentDay: 0,
  events: []
};

export default Month;
