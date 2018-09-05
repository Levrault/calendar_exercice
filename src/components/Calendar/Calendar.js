import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonthConnected from '../Month/MonthConnected';
import Loader from '../Loader/Loader';
import Error from '../Errors/Error';
import styles from './Calendar.css';

class Calendar extends Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.months.length > 0 && nextProps.months !== this.props.months;
  }

  /**
  * Render
  */
  render () {
    const { months, isLoading, error, year } = this.props;

    if (error !== null) {
      return <Error {...error} />;
    }

    if (!months.length) {
      return null;
    }

    return (
      <div className={styles.calendar}>
        {
          months.map(month => (
            <MonthConnected key={month.name} {...month} year={year} />
          ))
        }
        {isLoading &&
          <Loader />
        }
      </div>
    );
  }
}

Calendar.propTypes = {
  year: PropTypes.number.isRequired,
  months: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    numberOfDays: PropTypes.number.isRequired,
    chronology: PropTypes.number.isRequired,
    firstDayIndex: PropTypes.number.isRequired
  })),
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

Calendar.defaultProps = {
  year: 2018,
  months: [],
  isLoading: true
};

export default Calendar;
