import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import EventForm from './EventForm';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  const selector = formValueSelector('event');
  return {
    currentColor: selector(state, 'color')
  };
};

export default connect(mapStateToProps)(EventForm);

