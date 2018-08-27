import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Month from '../Month/Month';
import Loader from '../Loader/Loader';
import Error from '../Errors/Error';
import styles from './Calendar.css';


class Calendar extends PureComponent {
  /**
  * @contructor
  * @param {object} props
  */
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.props.fetch({
      year: this.props.currentYear
    });
  }

  componentDidUpdate (prevProps) {
    if (prevProps.currentYear !== this.props.currentYear) {
      this.props.fetch({
        year: this.props.currentYear
      });
    }
  }

  /**
  * Render
  */
  render () {
    const { months, isLoading, error } = this.props;

    if (error !== null) {
      return <Error {...error} />;
    }

    return (
      <div className={styles.calendar}>
        {
          months.map(month => (
            <Month key={month.name} {...month} />
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
  months: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    numberOfDays: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    monthNumber: PropTypes.number.isRequired,
    firstDayOfMonth: PropTypes.number.isRequired
  })),
  fetch: PropTypes.func.isRequired,
  currentYear: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

Calendar.defaultProps = {
  months: [],
  isLoading: true
};

export default Calendar;
