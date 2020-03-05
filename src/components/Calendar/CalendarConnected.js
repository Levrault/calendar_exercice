import { connect } from 'react-redux';
import Calendar from './Calendar';
import {
  loadingSelector,
  errorSelector
} from '../YearForm/YearForm-reselect';

/**
 * @param {object} state
 * @returns {object}
 */
const mapStateToProps = (state) => ({
  isLoading: loadingSelector(state),
  error: errorSelector(state)
});

export default connect(mapStateToProps)(Calendar);
