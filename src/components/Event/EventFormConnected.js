import { connect } from 'react-redux';
import EventForm from './EventForm';
import { successSelector, errorSelector } from './EventForm-reselect';
import { submit, colorChange, eventFormReset } from './EventForm-actions';

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
  handleSubmit: submit,
  handleColorChange: colorChange,
  handleReset: eventFormReset
};

export default connect(mapStateToProps, mapActionsToProps)(EventForm);

