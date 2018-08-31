import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Month from '../Month/Month';
import Loader from '../Loader/Loader';
import Error from '../Errors/Error';
import styles from './Calendar.css';

class Calendar extends PureComponent {
  /**
  * Render
  */
  render () {
    const { months, isLoading, error, year } = this.props;
    console.log('months', months); //@TODO : to remove

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
            <Month key={month.name} {...month} year={year} />
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
