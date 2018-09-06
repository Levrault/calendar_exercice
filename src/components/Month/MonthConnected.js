import { connect } from 'react-redux';
import Month from './Month';
import { eventsByMonthIdFilter } from '../Event/Events-reselect';

/**
 * @param {object} state
 * @param {object} ownProps
 * @returns {object}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    events: eventsByMonthIdFilter(state, ownProps)
  };
};

export default connect(mapStateToProps)(Month);
