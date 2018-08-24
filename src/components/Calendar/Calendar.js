import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Month from '../Month/Month';
import Loader from '../Loader/Loader';
import styles from './Calendar.css';


class Calendar extends Component {
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
      year: 2018
    });
  }

  /**
  * Render
  */
  render () {
    const { months, isLoading } = this.props;
    return (
      <div className={styles.calendar}>
        {
          months.map(month => (
            <Month key={month.name} {...month} />
          ))
        }
        <Loader active={isLoading} />
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
  isLoading: PropTypes.bool
};

Calendar.defaultProps = {
  months: [],
  isLoading: true
};

export default Calendar;
