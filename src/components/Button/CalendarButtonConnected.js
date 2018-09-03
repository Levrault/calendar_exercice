import { connect } from 'react-redux';
import { colorSelector } from '../Event/EventForm-reselect';
import CalendarButton from './CalendarButton';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {
    color: colorSelector(state)
  };
};

export default connect(mapStateToProps)(CalendarButton);
