import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WeekHeader from '../Week/WeekHeader';
import DayConnected from '../Day/DayConnected';
import styles from './Month.css';

class Month extends PureComponent {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {};
  }

  /**
   * Create a formated array to put the good day in
   * the good week
   */
  computeWeeks = () => {
    const { numberOfDays, firstDayOfMonth } = this.props;
    let weeks = [];
    let week = [];
    let day = 1;
    const length = numberOfDays + firstDayOfMonth;
    for (let index = 1; index < length; index++) {
      // move the first date to math the good day
      // e.g. if begin on wenesday, we will have a decay of 4
      if (index < firstDayOfMonth) {
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
    if (week.length < 7) {
      const rest = 7 - week.length;
      for (let index = 0; index < rest; index++) {
        week.push(0);
      }
    }

    // add last week
    weeks.push(week);

    return weeks;
  }

  /**
  * Render
  */
  render () {
    const weeks = this.computeWeeks();
    const { year, monthNumber, name } = this.props;
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
                        <DayConnected value={day} date={`${year}-${monthNumber}-${day}`} />
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
  firstDayOfMonth: PropTypes.number.isRequired,
  currentDay: PropTypes.number,
  monthNumber: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

Month.defaultProps = {
  currentDay: 0
};

export default Month;
