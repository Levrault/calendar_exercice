import React, { Component } from 'react';
import Month from '../Month/Month';
import styles from './Calendar.css';

const months = [
  {
    name: 'January',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 1,
    firstDayOfMonth: 2
  },
  {
    name: 'February',
    numberOfDays: 28,
    year: 2018,
    monthNumber: 2,
    firstDayOfMonth: 6
  },
  {
    name: 'March',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 3,
    firstDayOfMonth: 1
  },
  {
    name: 'April',
    numberOfDays: 30,
    year: 2018,
    monthNumber: 4,
    firstDayOfMonth: 2
  },
  {
    name: 'May',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 5,
    firstDayOfMonth: 5
  },
  {
    name: 'June',
    numberOfDays: 30,
    year: 2018,
    monthNumber: 6,
    firstDayOfMonth: 5
  },
  {
    name: 'July',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 7,
    firstDayOfMonth: 5
  },
  {
    name: 'August',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 8,
    firstDayOfMonth: 5
  },
  {
    name: 'September',
    numberOfDays: 30,
    year: 2018,
    monthNumber: 9,
    firstDayOfMonth: 5
  },
  {
    name: 'October',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 10,
    firstDayOfMonth: 5
  },
  {
    name: 'November',
    numberOfDays: 30,
    year: 2018,
    monthNumber: 11,
    firstDayOfMonth: 5
  },
  {
    name: 'December',
    numberOfDays: 31,
    year: 2018,
    monthNumber: 12,
    firstDayOfMonth: 5
  }
];

class Calendar extends Component {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {};
  }


  /**
  * Render
  */
  render () {
    return (
      <div className={styles.calendar}>
        {
          months.map(month => (
            <Month key={month.name} {...month} />
          ))
        }
      </div>
    );
  }
}

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
