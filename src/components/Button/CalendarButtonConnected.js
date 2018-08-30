import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import CalendarButton from './CalendarButton';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  const selector = formValueSelector('event');
  return {
    color: selector(state, 'color')
  };
};

export default connect(mapStateToProps)(CalendarButton);
