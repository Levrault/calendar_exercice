import React from 'react';
import PropTypes from 'prop-types';
import EventForm from './EventForm';
import styles from './EventFormPopUp.css';

/**
 * Event tooltips
 * @param {bool} active
 */
const EventFormPopUp = ({ active }) => {
  if (!active) return null;
  return (
    <div className={styles.eventFormPopUp}>
      <EventForm />
    </div>
  );
};

EventFormPopUp.propTypes = {
  active: PropTypes.bool
};

EventFormPopUp.defaultProps = {
  active: false
};

export default EventFormPopUp;
