import { connect } from 'react-redux';
import EventShow from './EventShow';
import { deleteEvent } from './EventForm-actions';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {
  };
};

const mapActionsToProps = {
  onDelete: deleteEvent
};

export default connect(mapStateToProps, mapActionsToProps)(EventShow);
