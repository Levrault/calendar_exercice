import { connect } from 'react-redux';
import EventForm from './EventForm';
import { onSelected } from '../Day/Day-actions';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, { onCancel: onSelected })(EventForm);
