import { connect } from 'react-redux';
import { colorSelector } from '../Event/EventForm-reselect';
import CalendarButton from './CalendarButton';

/**
 * @param {object} state
 * @param {object} ownProps
 * @returns {object}
 */
const mapStateToProps = (state, ownProps) => ({
  color: ownProps.editMode ? ownProps.event.color : colorSelector(state),
  active: ownProps.active || ownProps.editMode
});

export default connect(mapStateToProps)(CalendarButton);
