import { connect } from 'react-redux';
import EventForm from './EventForm';
import { successSelector, errorSelector } from './EventForm-reselect';
import { post, colorChange, eventFormReset } from './EventForm-actions';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {
    success: successSelector(state),
    errors: errorSelector(state)
  };
};

const mapActionsToProps = {
  onSubmit: post,
  onColorChange: colorChange,
  onReset: eventFormReset
};

export default connect(mapStateToProps, mapActionsToProps)(EventForm);

